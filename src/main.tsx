import { RouterProvider } from "react-router-dom"
import { Routes } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginContextProvider } from './hooks/LoginContext'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './style.css'

const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LoginContextProvider>
    <React.StrictMode>
      <QueryClientProvider client={query_client}>
        <RouterProvider router={Routes()} />
      </QueryClientProvider>
    </React.StrictMode>,
  </LoginContextProvider>
)