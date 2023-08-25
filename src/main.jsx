import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import './index.css'
import Project from './components/Project-One'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/taskmanager',
    element: <Project />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
