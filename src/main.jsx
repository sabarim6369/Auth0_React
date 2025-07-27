import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Auth0Provider
  domain="dev-m7ywryl2e21nkkds.us.auth0.com"
  clientId="fNPbFQp4vf910vsjs31lcGYlack5DQ1C"
  authorizationParams={{ redirect_uri: window.location.origin }}
>
    <App />
    </Auth0Provider>

  </StrictMode>,
)
