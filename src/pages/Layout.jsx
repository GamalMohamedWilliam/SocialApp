import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar';


export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col justify-between items-center'>
        <Navbar></Navbar>
        <div className="container">
            <Outlet/>


        </div>
        <footer>......</footer>
      
    </div>
  )
}
