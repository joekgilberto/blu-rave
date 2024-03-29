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
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [dateAdded, setDateAdded] = useState(new Date().toISOString().split('T')[0])
  const [started, setStarted] = useState(null)
  const [loading, setLoading] = useState(false);

  const initState = {
    title: "",
    year: null,
    startYear: null,
    endYear: null,
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
    } else if (e.target.name === "year") {
      if (e.target.value > 1888 && e.target.value <= new Date().getFullYear()) {
        updatedData = { ...formData, [e.target.name]: e.target.value }
      } else {
        updatedData = { ...formData, [e.target.name]: null }
      }
    } else if (e.target.name === "startYear") {
      if (e.target.value > 1927 && e.target.value <= new Date().getFullYear()) {
        updatedData = { ...formData, [e.target.name]: e.target.value }
      } else {
        updatedData = { ...formData, [e.target.name]: null }
      }
    } else if (e.target.name === "endYear") {
      if (e.target.value > 1927 && e.target.value <= new Date().getFullYear()) {
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

    if (formData.format === "Film Collection" || formData.format === "Television" || formData.format === "Miniseries") {
      formData.year = null;
    } else {
      formData.startYear = null;
      formData.endYear = null;
    }

    if (started && isAuthenticated && user.sub === formData.owner) {
      setLoading(true);
      await getAccessTokenSilently().then(async (accessToken) => {
        await bluRayServices.createBluRay(accessToken, user.sub, formData).then((res) => {
          if (res) {
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
    if (isAuthenticated) {
      setStart()
    }
  }, [isAuthenticated])

  return (
    !loading ?
      <div className='New'>
        <h2>NEW BLU-RAY</h2>
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>Title
            <input type='text' name="title" onChange={handleChange} required />
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
          {formData.format === "Film Collection" || formData.format === "Television" || formData.format === "Miniseries" ?
            <>
              <label>Start Year
                <input type='number' min="1927" max={`${new Date().getFullYear()}`} name="startYear" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} />
              </label>
              <label>End Year (if different)
                <input type='number' min="1927" max={`${new Date().getFullYear()}`} name="endYear" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} />
              </label>
            </>
            :
            <label>Release Year
              <input type='number' min="1888" max={`${new Date().getFullYear()}`} name="year" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} />
            </label>
          }
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
          <label>
            <textarea maxLength="255" name="notes" onChange={handleChange} />
          </label>
          <button type='submit'>Collect</button>
        </form>
        </div>
      </div>
      :
      <Loading />
  );
}