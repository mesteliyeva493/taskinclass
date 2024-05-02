import { useState,useEffect } from 'react';
import axios from 'axios';

import './App.css'
import Tablee from"./components/Tablee"
function App() {
 const [tablee,setTablee]=useState([]);
 useEffect(()=>{
  axios
  .get("https://northwind.vercel.app/api/orders")
  .then ((res)=>{
    setTablee([...res.data])
  })
  .catch((err)=>{
    console.log(err)
  })
  console.log(tablee)
 },[])

  return (
    <>
      <Tablee data={tablee}/>
    </>
  )
}

export default App
