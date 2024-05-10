import React from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
     <AdminHeader/>
     <Outlet/>
    </>
  )
}

export default Admin