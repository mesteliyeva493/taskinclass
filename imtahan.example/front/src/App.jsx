import { useEffect } from 'react';
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
import ROUTES from './routes';
import mainContext from './Context/Context';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
const router=createBrowserRouter(ROUTES)


function App() {

const[data,setData]=useState([])
const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [])

useEffect(()=>{
  axios.get("http://localhost:4048/api/clothes").then(res=>{
  setData(res.data)
})
},[])

const deleteData=async(id)=>{
  await axios.delete(`http://localhost:4048/api/clothes/${id}`).then(res=>{
    const target=data.filter((item)=>item._id !==id)
    setData([...target])
  })
}


const addBasket = (clothes) => {
  console.log(clothes)
  const target = basket.find(item => item.clothes._id == clothes._id)
  if (target) {
    target.count += 1
    target.totalPrice = target.count * target.clothes.price
    setBasket([...basket])
    localStorage.setItem('basket', JSON.stringify([...basket]))
  } else {
    const newItem = {
      _id: clothes._id,
      clothes: clothes,
      count: 1,
      totalPrice: clothes.price
    }
    setBasket([...basket, newItem])
    localStorage.setItem('basket', JSON.stringify([...basket, newItem]))
  }
}

const value={
data,
setData,
deleteData,
basket,
addBasket
}

  return (
    <>
    <mainContext.Provider value={value} >
    <RouterProvider router={router}/>
    </mainContext.Provider>
    </>
  )
}

export default App
