import './Edit.css';

import { useState, useEffect, useContext } from 'react';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

import Loading from '../Loading/Loading';

export default function Edit({ bluRay, setEdit, handleRequest }) {

    const { setPage } = useContext(PageContext);
    const [formData, setFormData] = useState(null);
    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        setFormData(bluRay)
    }, [])

    function handleChange(e) {
        let updatedData;

        if (e.target.name === "steelbook" || e.target.name === "definition") {
            updatedData = { ...formData, [e.target.name]: !formData[e.target.name] }
        } else {
            updatedData = { ...formData, [e.target.name]: e.target.value }
        }

        setFormData(updatedData)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (user && formData.owner === user.sub) {
            const accessToken = await getAccessTokenSilently();

            await bluRayServices.updateBluRay(accessToken, user.sub, bluRay.id, formData).then(() => {
                handleRequest()
                setEdit(false)
            })
        }
    }

    useEffect(() => {
        setPage("new")
    }, [])

    return (
        formData ?
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
                    <label>Definition
                        <select name="definition" onChange={handleChange}>
                            <option>Blu-Ray</option>
                            <option>4K</option>
                            <option>DVD</option>
                        </select>
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
                    <div className='owner-options'>
                        <button className='edit' type='submit'>Update</button>
                        <button className='delete' onClick={() => setEdit(false)}>Cancel</button>
                    </div>
                </form>
            </div>
            :
            <Loading />
    );
}