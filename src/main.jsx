import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DecorationApp from './DecorationWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DecorationApp />
  </StrictMode>,
)
