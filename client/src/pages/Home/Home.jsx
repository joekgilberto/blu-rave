import './Home.css';

import { useEffect, useContext } from 'react';
import { PageContext } from '../../data';

export default function Home() {
    const { setPage } = useContext(PageContext);

    useEffect(()=>{
        setPage("home")
    },[])

    return (
        <div className="Home">
            <p><span className='blu-rave'>Blu-Rave</span> is the ultimate app for every blu-ray collector. It's your personal high def companion, meticulously designed to help you organize and track your blu-ray library with ease. Say goodbye to the hassle of lost discs, duplicate purchases, and the dreaded "What should I watch tonight?" question.<br /><br /><span className='blu-rave'>Blu-Rave</span> empowers you to take control of your collection like never before. With its user-friendly interface and powerful features, this app is your ticket to blu-ray bliss.</p>
        </div>
    );
}