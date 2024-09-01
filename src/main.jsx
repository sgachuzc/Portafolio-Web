import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortafolioWeb } from './PortafolioWeb'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortafolioWeb />
  </StrictMode>,
)
