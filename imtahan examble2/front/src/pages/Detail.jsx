import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';
import mainContext from '../context/context';
function Detail() {
  const { addBasket,addWishlist } = useContext(mainContext);
  const[detail,setDetail]=useState({})

  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:4043/api/food/${id}`).then(res=>{
      setDetail(res.data);
    })
  },[])
  return (
    <>
       <Helmet>
        <title>Detail</title>
      </Helmet>
      <div>
      <div>
        <img src={detail.img} alt="" />
      </div>
      <div>
        <h5>{detail.title}</h5>
        <h5>{detail.price}</h5>
      </div>
      <button onClick={()=>addBasket(detail)}>basket</button>
      <button onClick={()=>addWishlist(detail)}>Wishlist</button>
    </div>
         

      
    </>
  )
}

export default Detail
