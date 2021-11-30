import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import inicio from './paginas/inicio';

ReactDOM.render(
   <React.StrictMode>
      <Auth0Provider domain= 'dev-xky6w1ue.us.auth0.com' clientId='ovQSLff7d489ypppKnmHVRdkI5PyWCie' responseType= 'token id_token' redirectUri= 'http://localhost:3000/inicio' scope= 'openid'>
          <App/>
      </Auth0Provider> 
    </React.StrictMode>,
  document.getElementById('root')
);

