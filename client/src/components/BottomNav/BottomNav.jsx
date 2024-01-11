import './BottomNav.css';

import { useContext } from "react";
import { PageContext } from '../../data';

import { useAuth0 } from "@auth0/auth0-react";

export default function BottomNav() {

    const { page } = useContext(PageContext);
    const { user, isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

    const links = [
        {
            page: 'home',
            url: '',
            text: 'HOME'
        },
        {
            page: 'new',
            url: 'new',
            text: 'ADD BLU-RAY'
        },
        {
            page: 'index',
            url: 'blu-rays',
            text: 'VIEW COLLECTION'
        },
        {
            page: 'feed',
            url: 'feed',
            text: 'SOCIAL FEED'
        }
    ]


    return (
        <nav className='BottomNav'>
            {user ?
                <>
                {links.filter((link) => link.page !== page).map((link)=> <a href={`/${link.url}`}><p>{link.text}</p></a>)}

                    {isAuthenticated ?
                        <a href='/'>
                            <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</p>
                        </a>
                        : null}
                </>
                :
                !isLoading ?
                    <a>
                        <p onClick={() => loginWithRedirect()}>LOGIN</p>
                    </a>
                    :
                    <p className='loading'>LOADING...</p>
            }
        </nav>
    );
}