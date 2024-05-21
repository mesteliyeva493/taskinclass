import Add from "./pages/Add";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";
import Home from "./pages/Home/Home";
import MainRoot from "./pages/MainRoot";
import Wishlist from "./pages/Wishlist";


const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
           {
            index:true,
            element:<Home/>
           },
           {
            path:"add",
            element:<Add/>
           },
           {
            path:"basket",
            element:<Basket/>
           },
           {
            path:"wislist",
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