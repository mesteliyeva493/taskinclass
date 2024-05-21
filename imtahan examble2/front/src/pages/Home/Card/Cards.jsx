import React, { useContext } from 'react'
import mainContext from '../../../context/context'
import Card from '../../../components/Card'

const Cards = () => {

    const {data}=useContext(mainContext)
  return (
    <section>
          <div className='container py-5 '>
      <div className='row'>
        {data.map((item,index)=>{
            return <Card key={index} item={item}/>
        })}
      </div>
    </div>
    </section>

  )
}

export default Cards
