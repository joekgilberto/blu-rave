import './Edit.css';

import { useState, useEffect, useContext } from 'react';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";
import * as tools from '../../utilities/tools';

import Loading from '../Loading/Loading';

export default function Edit({ bluRay, setEdit, handleRequest }) {

    const [formData, setFormData] = useState(null);
    const { user, getAccessTokenSilently } = useAuth0();
    const [airing, setAiring] = useState(bluRay.endYear?false:true);

    useEffect(() => {
        setFormData(bluRay)
    }, [])

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

    function handleAiring(e) {
        setAiring(!airing);
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (formData.format === "Television" || formData.format === "Miniseries") {
            formData.year = null;
            if (airing) {
              formData.endYear = null;
            }
          } else {
            formData.startYear = null;
            formData.endYear = null;
          }

        if (user && formData.owner === user.sub) {
            const accessToken = await getAccessTokenSilently();

            await bluRayServices.updateBluRay(accessToken, user.sub, bluRay.id, formData).then(() => {
                handleRequest()
                setEdit(false)
            })
        }
    }

    return (
        formData ?
            <div className='New'>
                <form onSubmit={handleSubmit}>
                    <label>Title
                        <input type='text' maxLength="50" name="title" onChange={handleChange} value={tools.putTheBack(formData.title)} required />
                    </label>

                    {formData.format === "Television" || formData.format === "Miniseries" ?
                        <>
                            <label>Start Year
                                <input type='number' min="1927" max={`${new Date().getFullYear()}`} name="startYear" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} value={formData.startYear} />
                            </label>

                            <label className='check'>Finished Airing?
                                <div className='container'>
                                    <input className='checkbox' type='checkbox' onChange={handleAiring} defaultChecked={formData.endYear?true:false} />
                                    <span className="checkmark"></span>
                                </div>
                            </label>

                            {!airing ?
                                <label>End Year
                                    <input type='number' min="1927" max={`${new Date().getFullYear()}`} name="endYear" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} value={formData.endYear} />
                                </label>
                                : null}
                        </>
                        :
                        <label>Release Year
                            <input type='number' min="1888" max={`${new Date().getFullYear()}`} name="year" step="1" onChange={handleChange} onWheel={(e) => e.target.blur()} value={formData.year} />
                        </label>

                    }
                    <label className='check'>Special Edition
                        <div className='container'>
                            <input className='checkbox' type='checkbox' name="steelbook" onChange={handleChange} defaultChecked={formData.steelbook} />
                            <span className="checkmark"></span>
                        </div>
                    </label>
                    <label>Definition
                        <select name="definition" onChange={handleChange} value={formData.definition}>
                            <option>Blu-Ray</option>
                            <option>4K</option>
                            <option>DVD</option>
                        </select>
                    </label>
                    <label>Format
                        <select name="format" onChange={handleChange} value={formData.format}>
                            <option>Film</option>
                            <option>Film Collection</option>
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