import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Main2 from './components/Main2'

function App() {


  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-6">
             <Main/>
          </div>
          <div className="col-6">
            <Main2/>
          </div>
        </div>
      </div>
     
      
    </>
  )
}

export default App
