import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import { GlobalStyles as TwinGlobalStyles } from 'twin.macro'
import App from './App'
import globalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TwinGlobalStyles />
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
)