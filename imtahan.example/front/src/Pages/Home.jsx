import React from 'react'
import {Helmet} from "react-helmet";
import Cards from '../Components/Cards';
 
function Home() {
  return (
    <div>
           <Helmet>
            <title>HOME</title>
        </Helmet>
    
        <Cards/>
      
    </div>
  )
}

export default Home
