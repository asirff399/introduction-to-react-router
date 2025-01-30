import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>hellow </h1>
  },
  {
    path: '/about',
    element: <h1>I am in about page !!!</h1>
  },
  {
    path: '/contact',
    element: <h1>Call me right now !!!</h1>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
