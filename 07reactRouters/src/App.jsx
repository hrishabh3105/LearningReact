import { useState } from 'react'
import './App.css'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import './navbar.css'
import ParamsComp from './components/ParamsComp'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {path:"/",                  //this simply asks for path and what element to load for that path
      element: <Navbar />,
        children:[
          {
            path: "",
          element: <Home />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "/student/:id",
          element: <ParamsComp />
        }
        ]
    },
    {
      path: '*',
      element: <NotFound />
    }
    
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router = {router}  />  
    </div>
  )
}

export default App
