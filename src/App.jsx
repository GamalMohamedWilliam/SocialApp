import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Notfound from './pages/Notfound'

export default function App() {
  const routers= createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Login></Login>},
      {path:'register',element:<Register></Register>},
      {path:'Home',element:<Home></Home>},
      {path:'*',element:<Notfound></Notfound>},
    ]}
  ])
  return (
    <RouterProvider router={routers}></RouterProvider >
  )
}
