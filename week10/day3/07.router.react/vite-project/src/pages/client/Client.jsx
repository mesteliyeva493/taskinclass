import React from 'react'
import ClientHeader from '../../componenets/ClientHeader/ClientHeader';
import { Outlet } from "react-router-dom";
const Client=() =>{
  return (
    <>
    <ClientHeader/>
     <Outlet/>
    </>
  )
}

export default Client