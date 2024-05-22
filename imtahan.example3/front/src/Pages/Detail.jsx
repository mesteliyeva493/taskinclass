import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { useParams } from 'react-router';

function Detail() {

  const { id } = useParams()
  console.log(id)
  const [detail, setDetail] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:5050/api/product/${id}`).then((res)=>{
      console.log(res.data)
      setDetail(res.data)
    })
},[])
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div>
        <div>
          <img src={detail?.img} alt="" />
        </div>
        <div>
          <h5>{detail?.title}</h5>
          <h5>{detail?.price}</h5>
        </div>

      </div>
    </div>
  )
}

export default Detail