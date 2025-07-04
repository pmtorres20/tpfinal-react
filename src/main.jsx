import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessagesContextProvider from './Context/MessagesContext.jsx'
import { BrowserRouter } from 'react-router'
import ContactContextProvider from './Context/ContactContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <ContactContextProvider>
          <MessagesContextProvider >
            <App />
          </MessagesContextProvider>
        </ContactContextProvider>
      </AuthProvider>
    </ThemeProvider>  
  </BrowserRouter>

)
