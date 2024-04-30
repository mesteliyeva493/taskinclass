import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Inp({element}) {
  return (
    <>
     {/* <div className='container'>
       <form className='form'>
       <label htmlFor="one">Product name</label>
        <input id='one' type="text" placeholder='Product name' />
        <label htmlFor="two">Product Price</label>
        <input id='two' type="number" placeholder='Product Price' />
        <button type="button" class="btn btn-primary">submit</button>
       </form>
    </div>  */}
 

 
    { <tr>
      <td>{element.name}</td>
      <td>15.00</td>
      <td> <button type="button" className="btn btn-primary">Favorite</button></td>
      <td> <button type="button" className="btn btn-danger">Delete</button></td>
      <td> <button type="button" className="btn btn-warning">Update</button></td>
    </tr> 
   
    }
 
    
    </>
  )
}

export default Inp