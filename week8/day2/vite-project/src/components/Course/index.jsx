import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Course.css"
function Course({myCourse,myCourses,setCourses}){
      const handleClick=()=>{
         let filtered=myCourses.filter(x=>x.id!=myCourse.id)
         setCourses(filtered)
      }
    return(
        <div className="col-4">
            <img src={myCourse.img} alt="" />
            <div>{myCourse.title}</div>
            <div>${myCourse.price}</div>
            <button type="button" onClick={()=>handleClick()} class="btn btn-danger">Delete</button>
        </div>

    )
}

export default Course
