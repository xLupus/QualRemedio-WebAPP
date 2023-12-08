import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import './style.css'
import { Routes } from './routes'
import { LoginContextProvider } from './hooks/LoginContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LoginContextProvider>
    <React.StrictMode>
      <RouterProvider router={Routes()} />
    </React.StrictMode>,
  </LoginContextProvider>
)
