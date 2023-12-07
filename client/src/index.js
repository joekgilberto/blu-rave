import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const AUTH0_DOMAIN = process.env.REACT_APP_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const AUTH0_AUDIENCE = process.env.REACT_APP_AUDIENCE;
const AUTH0_SCOPE = process.env.REACT_APP_SCOPE;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: AUTH0_AUDIENCE,
        scope: AUTH0_SCOPE
      }}
    >
      <App />
    </Auth0Provider>
  </Router>
);