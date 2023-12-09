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
        
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={query_client}>
      <RouterProvider router={Routes()} />
    </QueryClientProvider>
  )