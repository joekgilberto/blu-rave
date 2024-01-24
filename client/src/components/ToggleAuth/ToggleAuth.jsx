import './ToggleAuth.css';

import { useAuth0 } from "@auth0/auth0-react";
import logout from '../../functions/logout';

export default function ToggleAuth() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className="ToggleAuth">
            {user ?
                isAuthenticated ?
                    <a href='/'>
                        <p onClick={() => logout() }>LOGOUT</p>
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