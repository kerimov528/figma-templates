import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './shared/ui/global.css'


import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './app/ErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={'Something Went Wrong'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
