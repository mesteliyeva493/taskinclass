import React from 'react'
import {Helmet} from "react-helmet";
import Cards from '../../Components/Cards';
import Main from './Main/Main';
function Home() {
  return (
    <div>

    <Helmet>
        <title>Home</title>
    </Helmet>
    <Main/>
    <Cards/>
    <h1>hfhf</h1>
    </div>
  )
}

export default Home