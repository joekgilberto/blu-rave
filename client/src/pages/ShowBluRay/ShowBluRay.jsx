import './ShowBluRay.css';

import { useEffect, useContext, useState } from 'react';
import { PageContext } from '../../data';

import Loading from '../../components/Loading/Loading';

const dummyData = {
    title: "Bullet Train",
    steelbook: true,
    four_k: true,
    format: "Film",
    notes: "Steelbook bought on sale from Amazon.",
    date_added: "2023-10-19"
}

export default function ShowBluRay() {

    const { setPage, setModal } = useContext(PageContext);
    const [bluRay, setBluRay] = useState(null);

    useEffect(()=>{
        setPage("show")
        setBluRay(dummyData)
    },[])

    function handleDelete(){
        setModal(true)
    }

    return (
        <div className="ShowBluRay">
            {bluRay?
            <>
            <h2>{bluRay.title}</h2>
            <p>Format: {bluRay.format}</p>
            <p>Definition: {bluRay.four_k?"4K":"HD"}</p>
            {bluRay.steelbook?<p>Special Edition</p>:null}

            {bluRay.notes?
            <div className='notes'>
                <p className='underline'>Notes:</p>
                <p>{bluRay.notes}</p>
            </div>
            :null}
            <div className='owner-options'>
                <button className='edit'>Edit</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
            </div>
            <p className='date-added'>Added {bluRay.date_added}</p>
            </>
            :
            <Loading />}
        </div>
    );
}