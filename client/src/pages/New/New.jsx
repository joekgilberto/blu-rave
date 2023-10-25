import './New.css';

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

const date = new Date();

const initState = {
  title: "",
  steelbook: false,
  four_k: false,
  format: "Film",
  notes: ""
}

export default function New({ setPage }) {

  const navigate = useNavigate()
  const [formData, setFormData] = useState(initState);

  function handleChange(e) {
    let updatedData;

    if (e.target.name === "steelbook" || e.target.name === "four_k"){
      let value;

      if (e.target.value === "on"){
        value = true;
      } else {
        value = false;
      }
      updatedData = { ...formData, [e.target.name]: value }
    } else {
      updatedData = { ...formData, [e.target.name]: e.target.value }
    }

    setFormData(updatedData)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    navigate("/index")
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
            <input className='checkbox' type='checkbox' name="four_k" onChange={handleChange} />
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