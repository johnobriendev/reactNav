import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Music from './components/Music.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              path: '/',
              element: <Home />,
          },
          {
              path: '/about',
              element: <About />,
          },
          {
              path: '/music',
              element: <Music />,
          },
          {
              path: '/contact',
              element: <Contact />,
          },
      ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </React.StrictMode>,
)
