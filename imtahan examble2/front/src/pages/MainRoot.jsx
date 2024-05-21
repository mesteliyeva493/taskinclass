import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import React from "react"

const MainRoot=()=>{
    return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>

    )
}

export default MainRoot