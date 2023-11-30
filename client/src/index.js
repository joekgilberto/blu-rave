import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Auth0Provider
      domain="dev-izyyi8s1l0oh6rko.us.auth0.com"
      clientId="8w4zj34LI82gUcgNclpDhDKQVttXTysg"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </Router>
);