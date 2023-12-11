import './New.css';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router";
import { PageContext } from '../../data';
import { useAuth0 } from "@auth0/auth0-react";
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import Loading from '../../components/Loading/Loading';

export default function New() {

  const navigate = useNavigate()
  const { setPage } = useContext(PageContext);
  const { user, getAccessTokenSilently } = useAuth0();
  const [dateAdded, setDateAdded] = useState(new Date().toISOString().split('T')[0])
  const [started, setStarted] = useState(null)
  const [loading, setLoading] = useState(false);

  const initState = {
    title: "",
    year: null,
    steelbook: false,
    definition: "Blu-Ray",
    format: "Film",
    notes: "",
    dateAdded: "",
    owner: "",
    username: "",
    email: ""
    }

  const [formData, setFormData] = useState(initState);


  function handleChange(e) {
    let updatedData;

    if (e.target.name === "steelbook") {
      updatedData = { ...formData, [e.target.name]: !formData[e.target.name] }
    } else if (e.target.name === "year"){
      if (e.target.value > 1888 && e.target.value <= new Date().getFullYear()){
          updatedData = { ...formData, [e.target.name]: e.target.value }
      } else {
          updatedData = { ...formData, [e.target.name]: null }
      }
    } else {
      updatedData = { ...formData, [e.target.name]: e.target.value }
    }

    setFormData(updatedData)
  }

  async function setStart() {
    setFormData({ ...formData, dateAdded: dateAdded, owner: user.sub, username: user.nickname, email: user.email })
    setStarted(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if(started && user && user.sub === formData.owner)
    {
      setLoading(true);
      await getAccessTokenSilently().then(async (accessToken) => {
        await bluRayServices.createBluRay(accessToken, user.sub, formData).then((res) => {
          if (res){
            navigate(`/blu-rays/${res.id}`)
          } else {
            navigate('/blu-rays')
          }
        })
      })
    }
  }

  useEffect(() => {
    setPage("new")
  }, [])

  useEffect(() => {
    if(user){
      setStart()
    }
  }, [user])

  return (
    !loading?
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label>Title
          <input type='text' maxLength="50" name="title" onChange={handleChange} required />
        </label>
        <label>Release Year
          <input type='number' min="1888" max={`${new Date().getFullYear()}`} name="year" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} />
        </label>
        <label className='check'>Special Edition
          <div className='container'>
            <input className='checkbox' type='checkbox' name="steelbook" onChange={handleChange} />
            <span className="checkmark"></span>
          </div>
        </label>
        <label>Definition
          <select name="definition" onChange={handleChange}>
            <option>Blu-Ray</option>
            <option>4K</option>
            <option>DVD</option>
          </select>
        </label>
        <label>Format
          <select name="format" onChange={handleChange}>
            <option>Film</option>
            <option>Film Collection</option>
            <option>Short</option>
            <option>Television</option>
            <option>Miniseries</option>
          </select>
        </label>
        <label>
          <textarea maxLength="255" name="notes" onChange={handleChange} />
        </label>
        <button type='submit'>Collect</button>
      </form>
    </div>
    :
    <Loading />
  );
}