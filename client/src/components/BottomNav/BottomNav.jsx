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
                    {links.filter((link) => link.page !== page).map((link,idx) => {
                        return <>
                            <a href={`/${link.url}`}><p>{link.text}</p></a>
                            {idx!==links.filter((link) => link.page !== page).length-1?<p className='divider'>|</p>:null}
                        </>
                    })}
                </>
                :
                isLoading ? <p className='loading'>LOADING...</p> : null
            }
        </nav>
    );
}