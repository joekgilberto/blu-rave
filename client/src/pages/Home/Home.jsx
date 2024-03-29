import './Home.css';

import { useEffect, useContext, useState } from 'react';
import { PageContext } from '../../data';
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
    const { setPage } = useContext(PageContext);
    const { user, isAuthenticated } = useAuth0();

    const [username, setUsername] = useState(null);

    useEffect(() => {
        setPage("home")
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            setUsername(user.nickname)
        }
    }, [isAuthenticated])

    return (
        <div className="Home">
            {username ? <p className='hello'>Hello, {username}!</p> : null}
            <p>Blu-Rave is currently under construction. Please come back later, or reach out to <a href='https://joekgilberto.com/contact' target='_blank' style={{ color: 'inherit', textDecoration: 'underline' }}>Joe Gilberto</a> for more information!</p>
            {/* <p><span className='blu-rave'>Blu-Rave</span> is the ultimate app for every blu-ray collector. It's your personal high def companion, meticulously designed to help you organize and track your blu-ray library with ease. Say goodbye to the hassle of lost discs, duplicate purchases, and the dreaded "What should I watch tonight?" question.<br /><br /><span className='blu-rave'>Blu-Rave</span> empowers you to take control of your collection like never before. With its user-friendly interface and powerful features, this app is your ticket to blu-ray bliss.</p> */}
        </div>
    );
}