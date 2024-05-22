import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import mainContext from '../Context/Context'

function Card({item}) {
    const {deleteData,addBasket}=useContext(mainContext)
  return (
    <div className='col-lg-3 col-md-6 g-3'>
        <div>
            <img src={item.img} alt="" />
        </div>
        <div>
            <Link to={`/${item._id}`}><h5>{item.title}</h5></Link>
            <h5>{item.price}</h5>
            <button onClick={()=>{addBasket(item)}}>Basket</button>
            <button onClick={()=>{deleteData(item._id)}}>delete</button>
        </div>
      
    </div>
  )
}

export default Card
