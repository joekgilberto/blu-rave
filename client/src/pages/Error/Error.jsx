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
            <h2>404 - Blu-Ray not found</h2>
        </div>
    );
}