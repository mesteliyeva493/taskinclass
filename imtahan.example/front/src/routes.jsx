
import Add from "./Pages/Add"
import Basket from "./Pages/Basket"
import Detail from "./Pages/Detail"
import Home from "./Pages/Home"
import MainRoot from "./Pages/MainRoot"
import Wishlist from "./Pages/Wishlist"


  const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"Add",
            element:<Add/>
        },
        {
            path:"Basket",
            element:<Basket/>
        },
        {
            path:"Wishlist",
            element:<Wishlist/>
        },
        {
            path:"/:id",
            element:<Detail/>
        }

        ]
    }
  ]


  export default ROUTES