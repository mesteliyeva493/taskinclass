
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Router } from './routers/Router';


const routes = createBrowserRouter(Router)

function App() {

  return (
   <>
    <RouterProvider router={routes}/>
   </>
  )
}

export default App