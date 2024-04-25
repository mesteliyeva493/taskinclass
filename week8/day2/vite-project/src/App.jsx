
import { useState } from "react";
import data from "./data";
// import AddForm from"./components/AddForm"
import Courses from"./components/Courses"
// import SortSearch from"./components/SortSearch"


function App() {

  let [courses,setCourses]=useState(data)
 
  return (
    <>
   <Courses myCourses={courses} setCourses={setCourses}/>
    </>
  );
}

export default App;
