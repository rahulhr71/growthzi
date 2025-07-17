import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {textProvider } from './context/textContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <textProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </textProvider>

  </StrictMode>,
)
