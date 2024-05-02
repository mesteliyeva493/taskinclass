import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';

const Tablee = ({data}) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'id',
    });
  };
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      filters: [
        {
          text: '250',
          value: '250',
        },
        {
          text: '249',
          value: '249',
        },
      ],
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'customerId',
      dataIndex: 'customerId',
      key: 'customerId',
      sorter: (a, b) => a.customerId - b.customerId,
      sortOrder: sortedInfo.columnKey === 'customerId' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'shipVia',
      dataIndex: 'shipVia',
      key: 'shipVia',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filteredValue: filteredInfo.shipVia || null,
      onFilter: (value, record) => record.shipVia.includes(value),
      sorter: (a, b) => a.shipVia.length - b.shipVia.length,
      sortOrder: sortedInfo.columnKey === 'shipVia' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};
export default Tablee;