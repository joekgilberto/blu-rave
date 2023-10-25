import './Error.css';

import { useEffect, useContext } from 'react';
import { PageContext } from '../../data';

export default function Error() {

    const { setPage } = useContext(PageContext);

    useEffect(()=>{
        setPage("error")
    },[])

    return (
        <div className="Error">
            <h2>Error 404</h2>
            <p>Blu-Ray not found, return to <a href='/'>homepage</a>.</p>
        </div>
    );
}