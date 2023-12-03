import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import './style.css'
import { Routes } from './routes'
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
