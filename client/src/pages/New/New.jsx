import './New.css';

import { useEffect } from 'react';

export default function New({ setPage }) {

    useEffect(()=>{
        setPage("new")
    },[])

  return (
    <div className='New'>
      <form>
        <label>Title
          <input type='text' maxlength="50"/>
        </label>
        <label className='check'>Special Edition
          <input className='checkbox' type='checkbox'/>
        </label>
        <label className='check'>4K
          <input className='checkbox' type='checkbox'/>
        </label>
        <label>Format
          <select>
            <option>Film</option>
            <option>Short</option>
            <option>Television</option>
            <option>Miniseries</option>
          </select>
        </label>
        <label>Notes
          <textarea maxlength="255"/>
        </label>
        <button type='submit'>Save</button>
        </form>
    </div>
  );
}