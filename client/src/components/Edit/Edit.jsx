import './Edit.css';

import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from "react-router";
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';

import Loading from '../Loading/Loading';

export default function Edit({ bluRay }) {

    const navigate = useNavigate()
    const { setPage } = useContext(PageContext);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        setFormData(bluRay)
    }, [])

    function handleChange(e) {
        let updatedData;

        if (e.target.name === "steelbook" || e.target.name === "four_k") {
            let value;

            if (e.target.value === "on") {
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

        bluRayServices.createBluRay(formData).then(() => {
            navigate('/blu-rays')
        })
    }

    useEffect(() => {
        setPage("new")
    }, [])

    return (
        formData?
        <div className='New'>
            <form onSubmit={handleSubmit}>
                <label>Title*
                    <input type='text' maxLength="50" name="title" onChange={handleChange} value={formData.title} required />
                </label>
                <label className='check'>Special Edition
                    <div className='container'>
                        <input className='checkbox' type='checkbox' name="steelbook" onChange={handleChange} defaultChecked={formData.steelbook} />
                        <span className="checkmark"></span>
                    </div>
                </label>
                <label className='check'>4K
                    <div className='container'>
                        <input className='checkbox' type='checkbox' name="fourK" onChange={handleChange} defaultChecked={formData.fourK} />
                        <span className="checkmark"></span>
                    </div>
                </label>
                <label>Format
                    <select name="format" onChange={handleChange} value={formData.format}>
                        <option>Film</option>
                        <option>Short</option>
                        <option>Television</option>
                        <option>Miniseries</option>
                    </select>
                </label>
                <label>Notes
                    <textarea maxLength="255" name="notes" onChange={handleChange} value={formData.notes} />
                </label>
                <button type='submit'>Update</button>
            </form>
        </div>
        :
        <Loading />
    );
}