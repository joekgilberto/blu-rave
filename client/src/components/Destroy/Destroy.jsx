import './Destroy.css';

import { useNavigate, useParams } from 'react-router-dom';
import * as bluRayServices from '../../utilities/blu-rays/blu-services';

export default function Destroy({setConfirm}) {

    const navigate = useNavigate()
    const { id } = useParams();
    console.log("ID",id)

    async function handleDelete(){
        await bluRayServices.destroyBluRay(id).then(()=>{
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