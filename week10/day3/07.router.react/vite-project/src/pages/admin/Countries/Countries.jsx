import React, { useState, useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import axios from "axios";



const Countries = ()=>{
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const[countries,setCountries]=useState([]);

  
  const ALLCountry=async()=>{
    let res=await axios.get("http://localhost:3000/countries")
    setCountries(res.data)
  };
  useEffect(()=>{
    ALLCountry()
  },[])
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: 'A',
          value: 'A',
        },
        {
          text: 'Z',
          value: 'Z',
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
      sorter: (a, b) => a.population - b.population,
      sortOrder: sortedInfo.columnKey === 'population' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Flag',
      dataIndex: 'flagImg',
      key: 'flagImg',
      render:(text,record)=><img src={text} alt={record.name} style={{width:"60px"}}/>,
      sortOrder: sortedInfo.columnKey === 'flagImg' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title:"Actions",
      key:"actions",
      render:(record)=>(
        <>
       <Button onClick={()=>handleDelete(record.id)}> 
         Delete
        </Button>
        <Button > 
         Edit
        </Button>
        </>

      )
    }
  ];

  const handleDelete=async (id)=>{
    await axios.delete(`http://localhost:3000/countries/${id}`)
    setCountries(countries.filter((a)=>a.id !==id))
    alert("deleted")
  }
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const setPopulationSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'population',
    });
  };



  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setPopulationSort}>Sort population</Button>
      </Space>
      <Table columns={columns} dataSource={countries} onChange={handleChange} />
    </>
  );

}

 

  
 

export default Countries;