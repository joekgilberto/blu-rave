import './SideNav.css';

import { useContext } from "react";
import { PageContext } from '../../data';

import { useAuth0 } from "@auth0/auth0-react";

export default function SideNav() {

  const { page } = useContext(PageContext);
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();


  return (
    <nav className='SideNav'>
      {isAuthenticated ?
        <>
          {page !== "home" ?
            <a href='/'>
              <p>HOME</p>
            </a>
            : null}

          {page !== "index" ?
            <a href='/blu-rays'>
              <p>VIEW COLLECTION</p>
            </a>
            : null}

          {page !== "new" ?
            <a href='/new'>
              <p>ADD BLU-RAY</p>
            </a>
            : null}
            
          {page !== "feed" ?
            <a href='/feed'>
              <p>SOCIAL FEED</p>
            </a>
            : null}

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