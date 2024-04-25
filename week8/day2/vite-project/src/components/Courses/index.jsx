import React from "react";
import { useState } from "react";
import Course from "../Course";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Courses.css"
function Courses({myCourses,setCourses}){
    return(
        <div className="container">
            <div className="ro">
            {
                myCourses && myCourses.map((myCourse,idx)=>(
                    <Course key={idx} myCourse={myCourse} myCourses={myCourses} setCourses={setCourses}/>
                ))
            }
        </div>
        </div>
    )
}
export default Courses