import React, { useState, useEffect } from 'react';
import controller from '../../../services'
import { Card, Button} from 'antd'
const { Meta } = Card;

const MyCountries = () => {
  const [data,setData]=useState([])

  const Allitems= ()=>{
  controller.getAll("countries").then((res)=>{
    console.log(res.data);
    setData(res.data)
  })
}
useEffect(()=>{
  Allitems()
},[])

return (
  <div>
    {
    data&&data.map((e) => 
      <Card
        key={e.id}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="flag" src={e.flagImg} />}
      >
        <Meta title={e.name} />
        <p>{e.population}</p>
        <p>{e.capital}</p>
        <p>{e.description}</p>
        <Button>Detail</Button>
      </Card>
    )}
  </div>
);
};

export default MyCountries