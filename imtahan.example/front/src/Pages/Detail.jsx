import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

function Detail() {

  const{id}=useParams()
  const [detail,setDetail]=useState({})
  console.log( detail)
  useEffect(()=>{
    axios.get(`http://localhost:4048/api/clothes/${id}`).then(res=>{
      setDetail(res.data)
    })
  },[])
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div className="col-lg-3 col-md-6 mr-3 mb2">
        <div className="card1">
          <div className="imgCard">
            <img width={250} height={250} className="card-image" src={detail.img} />
          </div>
          <div className="bodyCard">
            <h2 class="card-name">
               {detail.name}
            </h2>
            <p className="priceCard">{detail.price}</p>
            <p className="desceCard">{detail.describtion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
