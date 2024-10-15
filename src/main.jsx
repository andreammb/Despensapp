import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeMicroProvider } from '../lib/micro/src/provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeMicroProvider>
      <App />
    </ThemeMicroProvider>
  </StrictMode>,
)
