import './index.css'
import App from './App'
import React from 'react'
import Project from './components/pages/ProjectOne'
import thumbnailImage from './images/thumbnails/thumb.png'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Maintenance } from './components/pages/Maintenance'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Maintenance />
        {/* <App /> */}
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
    <RouterProvider router={router}>
      <img src={thumbnailImage} alt="Thumbnail" />
    </RouterProvider>
  </React.StrictMode>
)
