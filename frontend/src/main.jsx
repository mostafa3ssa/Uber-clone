import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'  
import UserContext from './context/UserContext';
import CaptainContext from './context/CapatainContext.jsx'
import SocketProvider from './context/SocketContext.jsx'

console.log("main.jsx");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContext>
      <SocketProvider>
        <CaptainContext>
        <App />
        </CaptainContext>
      </SocketProvider>
      </UserContext>
    </BrowserRouter>
  </StrictMode>,
)
