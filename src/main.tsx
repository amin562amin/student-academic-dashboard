import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StudentProvider } from './context/StudentContext.tsx'
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </StrictMode>,
)
