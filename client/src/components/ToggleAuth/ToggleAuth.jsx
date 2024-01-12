import './ToggleAuth.css';

import { useAuth0 } from "@auth0/auth0-react";

export default function ToggleAuth() {
    const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

    return (
        <div className="ToggleAuth">
            {user ?
                isAuthenticated ?
                    <a href='/'>
                        <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</p>
                    </a>
                    : null
                :
                isLoading ?
                    <p className='loading'>LOADING...</p>
                    :
                    null
            }
        </div >
    );
}