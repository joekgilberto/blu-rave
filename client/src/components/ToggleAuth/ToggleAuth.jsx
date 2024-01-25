import './ToggleAuth.css';

import { useAuth0 } from "@auth0/auth0-react";

export default function ToggleAuth() {
    const { isAuthenticated, logout, isLoading } = useAuth0();

    return (
        <div className="ToggleAuth">
            {
                isAuthenticated ?
                    <a href='/'>
                        <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</p>
                    </a>
                    :
                    isLoading ?
                        <p className='loading'>LOADING...</p>
                        :
                        null
            }
        </div >
    );
}