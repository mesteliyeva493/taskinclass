import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
import axios from 'axios'
import ROUTER from './Router/router';
import mainContext from './Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = createBrowserRouter(ROUTER)


function App() {
  const [data, setData] = useState([])
  // console.log(data);
  useEffect(() => {
    axios.get("http://localhost:5050/api/product").then((res) => {
      setData(res.data)
    })
  }, [])

 const deleteData=async(id)=>{
  await axios.delete(`http://localhost:5050/api/product/${id}`).then(()=>{
    const target=data.filter((item=>item._id !==id))
    setData([...target])
  })
 }


 const [basket,setBasket]=useState(localStorage.getItem('basket')? JSON.parse(localStorage.getItem('basket')):[])

const addBasket =(product)=>{

  const target=basket.find((item=>item.product._id==product._id))
  if(target){
    target.count+=1
    target.totalPrice=target.count*target.product.price
    setBasket([...basket])
    localStorage.setItem('basket',JSON.stringify([...basket]))
  }
  else{
    const newItem={
      _id:product._id,
      product:product,
      count:1,
      totalPrice:product.price
      
    }
    setBasket([...basket,newItem])
    localStorage.setItem('basket',JSON.stringify([...basket,newItem]))
  }
}

const deleteBasket=(product)=>{
  const target=basket.find((item=>item.product._id==product._id))
  basket.splice(basket.indexOf(target),1)
  setBasket([...basket])
  localStorage.setItem('basket',JSON.stringify([...basket]))
}

const decrease=(product)=>{
  const target=basket.find((item=>item.product._id==product._id))
  if(target.count>0){
     target.count-=1
   target.price=target.count*target.product.price
   setBasket([...basket])
   localStorage.setItem('basket',JSON.stringify([...basket]))
  }


}


const increase=(product)=>{
  const target=basket.find((item=>item.product._id==product._id))
     target.count+=1
   target.price=target.count*target.product.price
   setBasket([...basket])
   localStorage.setItem('basket',JSON.stringify([...basket]))
}





  return (
    <mainContext.Provider value={{data,setData,deleteData,basket,setBasket,addBasket,deleteBasket,decrease,increase}} >
      <RouterProvider router={routes} />
    </mainContext.Provider>
  )
}

export default App
