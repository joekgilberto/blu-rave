import './New.css';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router";
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';


let dateAdded = new Date()
dateAdded = dateAdded.toISOString().split('T')[0]

const initState = {
  title: "",
  steelbook: false,
  fourK: false,
  format: "Film",
  notes: "",
  dateAdded: dateAdded
}

export default function New() {

  const navigate = useNavigate()
  const { setPage } = useContext(PageContext);
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

  async function handleSubmit(e) {
    e.preventDefault()

    bluRayServices.createBluRay(formData).then(() => {
      navigate('/blu-rays')
    })
  }

  useEffect(() => {
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
        <label className='check'>4K
          <div className='container'>
            <input className='checkbox' type='checkbox' name="fourK" onChange={handleChange} />
            <span className="checkmark"></span>
          </div>
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