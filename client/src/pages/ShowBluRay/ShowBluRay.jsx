import './ShowBluRay.css';

import { useEffect, useContext } from 'react';
import { PageContext } from '../../data';

export default function ShowBluRay() {

    const { setPage } = useContext(PageContext);

    useEffect(()=>{
        setPage("show")
    },[])

    return (
        <div className="ShowBluRay">
        </div>
    );
}