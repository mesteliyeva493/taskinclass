import React, { useContext } from "react";
import mainContext from "../context/context";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { deleteData,addBasket,addWishlist } = useContext(mainContext);
  return (
    <div>
      <div>
        <img src={item.img} alt="" />
      </div>
      <div>
        <h5>{item.title}</h5>
        <h5>${item.price}</h5>
      </div>
      <button onClick={() => deleteData(item._id)}>delete</button>
      <button onClick={()=>addBasket(item)}>basket</button>
      <button > <Link to={`/${item._id}`}>detail</Link>  </button>
      <button onClick={()=>addWishlist(item)}>Wishlist</button>
    </div>
  );
};

export default Card;
