import './Destroy.css';

import { useNavigate, useParams } from 'react-router-dom';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';
import { useAuth0 } from "@auth0/auth0-react";

export default function Destroy({setConfirm}) {

    const navigate = useNavigate()
    const { id } = useParams();
    const { getAccessTokenSilently } = useAuth0();

    async function handleDelete(){
        const accessToken = await getAccessTokenSilently();
        await bluRayServices.destroyBluRay(accessToken,id).then(()=>{
            setConfirm(false)
            navigate("/blu-rays")
        })
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