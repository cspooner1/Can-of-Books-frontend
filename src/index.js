import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='can-of-books.us.auth0.com'
      clientId='NwiF8iILhWy0WkUD86HXCShXLMjWVIcX'
      redirectUri={window.location.origin}
      audience='https://can-of-books.us.auth0.com/api/v2/'
      scope='openid profile email'>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
