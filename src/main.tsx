import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StudentProvider } from './context/StudentContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <StudentProvider>
        <App />
        <ToastContainer position='top-right' />
     </StudentProvider>
    </BrowserRouter>
  </StrictMode>,
)
