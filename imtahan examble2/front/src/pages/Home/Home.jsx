import React from 'react'
import Cards from './Card/Cards'
import {Helmet} from "react-helmet";
import Welcome from './Welcome/Welcome';
import Hero from './Hero/Hero';
const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero/>
      <Welcome/>
      <Cards/>
    </main>
  )
}

export default Home
