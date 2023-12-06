import './New.css';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router";
import { PageContext } from '../../data';
import { useAuth0 } from "@auth0/auth0-react";
import * as bluRayServices from '../../utilities/blu-rays/blu-services';

export default function New() {

  const navigate = useNavigate()
  const { setPage } = useContext(PageContext);

  let dateAdded = new Date()
  dateAdded = dateAdded.toISOString().split('T')[0]

  const { getAccessTokenSilently } = useAuth0();

  const initState = {
    title: "",
    steelbook: false,
    definition: "Blu-Ray",
    format: "Film",
    notes: "",
    dateAdded: "",
    owner: ""
  }

  const [formData, setFormData] = useState(initState);


  function handleChange(e) {
    let updatedData;

    if (e.target.name === "steelbook" || e.target.name === "fourK") {
      updatedData = { ...formData, [e.target.name]: !formData[e.target.name] }
    } else {
      updatedData = { ...formData, [e.target.name]: e.target.value }
    }

    setFormData(updatedData)
  }

  async function setStart() {
    const accessToken = await getAccessTokenSilently();
    let dateAdded = new Date()
    dateAdded = dateAdded.toISOString().split('T')[0]
    setFormData({ ...formData, dateAdded: dateAdded, owner: accessToken })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await getAccessTokenSilently().then(async (accessToken) => {
      await bluRayServices.createBluRay(accessToken, formData).then(() => {
        navigate('/blu-rays')
      })
    }
    )

  }

  useEffect(() => {
    setStart()
    setPage("new")
  }, [])

  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label>Title*
          <input type='text' maxLength="50" name="title" onChange={handleChange} required />
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
            <option>Short</option>
            <option>Television</option>
            <option>Miniseries</option>
          </select>
        </label>
        <label>Notes
          <textarea maxLength="255" name="notes" onChange={handleChange} />
        </label>
        <button type='submit'>Collect</button>
      </form>
    </div>
  );
}