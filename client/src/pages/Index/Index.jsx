import './Index.css';

import { useEffect, useState } from 'react';

export default function Index({ setPage }) {

    const [format, setFormat] = useState(true)

    function handleClick() {
        setFormat(!format)
    }

    useEffect(() => {
        setPage("index")
    }, [])

    return (
        <div className="Index">
            <div className='list'>

            </div>
            <div className='formats'>
                <button onClick={handleClick} className={format ? "selected" : null}>Film</button>
                <button onClick={handleClick} className={!format ? "selected" : null}>Television</button>
            </div>
        </div>
    );
}