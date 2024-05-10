import React from 'react'

import ClientHeader from '../../components/ClientHeader/ClientHeader'

import { Outlet } from 'react-router-dom'
function Client() {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    
    </>
  )
}

export default Client