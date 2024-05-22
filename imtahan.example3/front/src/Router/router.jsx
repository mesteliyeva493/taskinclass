import Add from "../Pages/Add"
import Basket from "../Pages/Basket"
import Detail from "../Pages/Detail"
import Home from "../Pages/Home/Home"
import MainRoot from "../Pages/MainRoot"
import Wishlist from "../Pages/Wishlist"

const ROUTER=[
  {
    path:"/",
    element:<MainRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"basket",
            element:<Basket/>
        },
        {
            path:"add",
            element:<Add/>
        },
        {
            path:"Wishlist",
            element:<Wishlist/>
        },
        {
            path:"/:id",
            element:<Detail/>
        },
    ]
  }

]

export default ROUTER