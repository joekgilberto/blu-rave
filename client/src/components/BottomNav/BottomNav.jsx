import './BottomNav.css';

import { useContext } from "react";
import { PageContext } from '../../data';

import { useAuth0 } from "@auth0/auth0-react";
import login from '../../functions/login';

export default function BottomNav() {

    const { page } = useContext(PageContext);
    const { isAuthenticated, isLoading } = useAuth0();

    const links = [
        {
            page: 'home',
            url: '',
            text: 'home',
            image: 'https://i.imgur.com/1ENrzeq.png'
        },
        {
            page: 'new',
            url: 'new',
            text: 'add blu-ray',
            image: 'https://i.imgur.com/EIKyoAz.png'
        },
        {
            page: 'index',
            url: 'blu-rays',
            text: 'view collection',
            image: 'https://i.imgur.com/ADE1H7Z.png'
        },
        {
            page: 'feed',
            url: 'feed',
            text: 'social feed',
            image: 'https://i.imgur.com/bXOcMaD.png'
        }
    ]


    return (
        <nav className='BottomNav'>
            { isAuthenticated?
                <>
                    {links.filter((link) => link.page !== page).map((link, idx) => {
                        return <a key={idx} href={`/${link.url}`}><img alt={link.text} src={link.image} /></a>
                    })}
                </>
                :
                !isLoading ?
                    <a>
                        <p className='login' onClick={() => login()}>LOGIN</p>
                    </a>
                    :
                    <p className='login'>LOADING...</p>
            }
        </nav>
    );
}