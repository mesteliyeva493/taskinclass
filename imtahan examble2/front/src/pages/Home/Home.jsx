import React from 'react'
import Cards from '../../components/Cards'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Cards/>
    </div>
  )
}

export default Home
