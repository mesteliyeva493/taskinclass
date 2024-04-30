import { useEffect } from 'react'
import { useState } from 'react'
import Inp from './components/Inp'
import Product from './components/Product'
import axios  from 'axios'

function App() {
  const [data,setData]=useState([])
  const getAlldata=async()=>{
    let res =await axios.get('https://fakestoreapi.com/products')
    setData(res.data)
  }
useEffect(()=>{
  getAlldata()
},[])

  return (
    <>
      <Product data={data}/>
    </>
  )
}

export default App
