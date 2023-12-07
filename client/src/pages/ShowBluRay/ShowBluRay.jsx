import './ShowBluRay.css';

import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContext } from '../../data';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

import Loading from '../../components/Loading/Loading';
import Edit from '../../components/Edit/Edit';
import Destroy from '../../components/Destroy/Destroy';

export default function ShowBluRay() {

    const navigate = useNavigate()
    const { setPage } = useContext(PageContext);
    const [bluRay, setBluRay] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [edit, setEdit] = useState(false)
    const { id } = useParams();
    const { user, getAccessTokenSilently } = useAuth0();

    async function handleRequest() {
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getBluRay(accessToken, owner, id).then((res) => {
            res ? setBluRay(res) : navigate("/blu-rays");
        })
            .catch((err) => {
                console.log(err)
                navigate("/blu-rays")
            })
    }

    useEffect(() => {
        setPage("show")
    }, [])

    useEffect(() => {
        if (user) {
            handleRequest()
        }
    }, user)

    function handleDelete() {
        setConfirm(true)
    }

    function handleEdit() {
        setEdit(true);
    }

    return (
        <div className="ShowBluRay">
            {bluRay ?
                <>
                    {!edit ?
                        <>
                            <h2>{bluRay.title}</h2>
                            {bluRay.year ?
                                <p className='release-year'>{bluRay.year}</p>
                                : null}

                            {!confirm ?
                                <>
                                    <p>Format: {bluRay.format}</p>
                                    <p>Definition: {bluRay.definition == "4K" ? "4K" : bluRay.definition == "Blu-Ray" ? "HD" : "SD"}</p>
                                    {bluRay.steelbook ? <p>Special Edition</p> : null}

                                    {bluRay.notes ?
                                        <div className='notes'>
                                            <p className='underline'>Notes:</p>
                                            <p>{bluRay.notes}</p>
                                        </div>
                                        : null}
                                    <div className='owner-options'>
                                        <button className='edit' onClick={handleEdit}>Edit</button>
                                        <button className='delete' onClick={handleDelete}>Delete</button>
                                    </div>
                                    <p className='date-added'>Added {bluRay.dateAdded}</p>
                                </>
                                :
                                <Destroy setConfirm={setConfirm} />}
                        </>
                        :
                        <Edit bluRay={bluRay} setEdit={setEdit} handleRequest={handleRequest} />}
                </>
                :
                <Loading />}
        </div>
    );
}