import React from 'react'
import thumbnailImage from './images/thumbnails/thumb.png'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Project from './components/ProjectOne'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
      </>
    )
  },
  {
    path: '/taskmanager',
    element: (
      <>
        <Project />
      </>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src={thumbnailImage} alt="Thumbnail" />
    <RouterProvider router={router} />
  </React.StrictMode>
)
