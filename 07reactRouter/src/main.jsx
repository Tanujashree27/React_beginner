import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import router from 'express/lib/router/index.js'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'


import React from 'react'
import ReactDOM from 'react-dom/client'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "github",
        element: <Github />
      }
    ]
  }
])
// const router = createBrowserRouter(
// createRoutesFromElements(
// <Route path='/' element={<Layout />}>
// <Route path='' element={<Home />} />
// <Route path='about' element={<About />} />
// <Route path='contact' element={<Contact />} />
// </Route>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)