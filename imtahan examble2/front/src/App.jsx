import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import mainContext from "./context/context";
import ROUTES from "./index.routes";
const router = createBrowserRouter(ROUTES);

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4043/api/food").then((res) => {
      setData(res.data);
    });
  },[]);

  
const deleteData=async(id)=>{
  await axios.delete(`http://localhost:4043/api/food/${id}`).then(()=>{
    const target=data.filter((item)=>item._id !==id)
    setData([...target])
  })
}



const [wishlist,setWishlist]=useState(localStorage.getItem('wishlist')? JSON.parse(localStorage.getItem('wishlist')):[])
const addWishlist=(product)=>{
  const target=wishlist.find(item=>item.product_id==product.id)
  if(target){
    alert("movcuddur")
  }else{
    setWishlist([...wishlist])
    localStorage.setItem('wishlist', JSON.stringify([...wishlist]))
  }
}

const deleteWishlist=(product)=>{
  const target=wishlist.find(item=>item.product_id==product.id)
  wishlist.splice(wishlist, indexOf(target),1)
}

const [basket,setBasket]=useState(localStorage.getItem('basket')? JSON.parse(localStorage.getItem('basket')):[])
const addBasket=(product)=>{
  console.log(product)
  const target=basket.find(item=>item.product_id==product._id)
  if(target){
    target.count+=1
    target.totalprice=target.count*target.price
  }else{
    const newItem = {
      _id: product._id,
      product: product,
      count: 1,
      totalPrice: product.price
    }
    setBasket([...basket, newItem])
    localStorage.setItem('basket', JSON.stringify([...basket, newItem]))
  }
}
 const decreaseItem=(product)=>{
  const target=basket.find(item=>item.product_id==product.id)
  if(target.count>0){
    target.count-=1
    target.totalprice=target.count*target.price
    setBasket([...basket])
    localStorage.setItem('basket', JSON.stringify([...basket]))
  }
 }
 const increaseItem=(product)=>{
  const target=basket.find(item=>item.product_id==product.id)
  target.count+=1
    target.totalprice=target.count*target.price
    setBasket([...basket])
    localStorage.setItem('basket', JSON.stringify([...basket]))
 }

const deleteBasket=(product)=>{
  const target=basket.find(item=>item.product_id==product.id)
  basket.splice(basket, indexOf(target),1)
}
  const value = {
    data,
    deleteData,
    setData,
    basket,
    wishlist,
    setBasket,
    addBasket,
    decreaseItem,
    increaseItem,
    addWishlist,
    deleteBasket,deleteWishlist
  };

  return (
    <mainContext.Provider value={value}>
      <RouterProvider router={router} />
    </mainContext.Provider>
  );
}

export default App;
