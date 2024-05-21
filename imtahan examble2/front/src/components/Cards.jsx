import React, { useContext } from 'react'
import mainContext from '../context/context'
import Card from './Card'

const Cards = () => {

    const {data}=useContext(mainContext)
  return (
    <div>
      <div>
        {data.map((item,index)=>{
            return <Card key={index} item={item}/>
        })}
      </div>
    </div>
  )
}

export default Cards
