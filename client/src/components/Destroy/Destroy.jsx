import './Destroy.css';

import { useNavigate, useParams } from 'react-router-dom';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';

export default function Destroy({setConfirm}) {

    const navigate = useNavigate()
    const { id } = useParams();
    const { user, getAccessTokenSilently } = useAuth0();
    const [bluRay, setBluRay] = useState(null);

    useEffect(()=>{
        handleRequest()
        console.log(bluRay)
    },[user])

    async function handleRequest(){
        const owner = user.sub;
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.getBluRay(accessToken,owner,id).then((res) => {
            res ? setBluRay(res) : navigate("/blu-rays");
        })
            .catch((err) => {
                console.log(err)
                navigate("/blu-rays")
            })
    }

    async function handleDelete(){
        if(user && bluRay.owner === user.sub){
            const accessToken = await getAccessTokenSilently();
            await bluRayServices.destroyBluRay(accessToken,user.sub,id).then(()=>{
                setConfirm(false)
                navigate("/blu-rays")
            })
        }
    }

    function handleClick(){
        setConfirm(false)
    }

    return (
        <div className="Destroy">
                <h2>Pause</h2>
                <p>Are you sure you want to delete this blu-ray?</p>
                <div className='delete-options'>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                    <button className='cancel' onClick={handleClick}>Cancel</button>
                </div>
        </div>
    );
}