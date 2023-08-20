import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain="dev-232fps7j.us.auth0.com" clientId='5AosctQWtb6wQBQWzCxyhKO0LmneigP5' authorizationParams={{
    redirect_uri: 'localhost:3000'
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
