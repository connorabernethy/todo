import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const theme = extendTheme( {
  styles: {
    global: {
      body: {
        bg: '#262626'
      }
    }
  }
} );

root.render(
  <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Auth0Provider>
);
