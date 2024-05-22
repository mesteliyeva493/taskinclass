import React, { useContext } from 'react'
import mainContext from '../Context/Context'
import Card from './Card'



function Cards() {

    const {data}=useContext(mainContext)
    // console.log('r:',data)
  return (
    <div className='container'>
        <div className='row'>
       {data && data.map((item,index)=>{
        return <Card key={index} item={item}/>
       })}
        </div>

    </div>
  )
}

export default Cards