import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import React, { useEffect } from 'react'
import { useAuth } from "../store/authStore"
function Rootlayout() {

//import check auth
const checkAuth=useAuth(state=>state.checkAuth)
useEffect(()=>{
  checkAuth()
},[checkAuth])
  return (
    <div><Header/>
    <div className="min-h-screen mx-32">
        <Outlet/>
        </div>
        <Footer/>
        </div>
  )
}

export default Rootlayout