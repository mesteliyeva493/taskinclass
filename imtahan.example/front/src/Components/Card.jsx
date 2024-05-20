import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import mainContext from "../Context/Context";
const Card=({item})=> {
  const { deleteData,addBasket } = useContext(mainContext)

  return (
    <div className="col-lg-3 col-md-6 mr-3 mb2">
      <div className="card1">
        <div className="imgC">
          <img
            src={item.img}
            width="250"
            height={300}
            alt="..."
            className="card-image"
          />
        </div>
        <div className="bodyCard">
          <h2 className="cName">{item.name}</h2>
          <p className="Desc">{item.describtion}</p>
          <p className="price">{item.price}</p>
        </div>
        <button ><Link to={`/${item._id}`}> Detail</Link></button>
        <button onClick={()=>{
          addBasket(item)
        }}>basket</button>
        <button>favorite</button>
        <button onClick={()=>{
          deleteData(item._id)
        }} >delete</button>
      </div>
    </div>
  );
}

export default Card;
