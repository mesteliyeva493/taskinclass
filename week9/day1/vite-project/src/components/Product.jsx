import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inp from './Inp'

function product({data}) {
  return (
    <>
     <div className='table'>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Favorite</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
   {
data && data.map((element,idx)=>{
  <Inp key={idx} element={element}/>
})
   }
  </tbody>
</table>
     </div>
   
    </>
  )
}

export default product