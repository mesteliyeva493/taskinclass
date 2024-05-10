import Admin from "../pages/admin/Admin";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import AddCategory from "../pages/admin/AddCategory/AddCategory";
import AddProducts from "../pages/admin/AddProducts/AddProducts";
import Categories from "../pages/admin/Categories/Categories" ;
import Login from "../pages/admin/Login/Login";
import Messages from "../pages/admin/Messages/Messages";
import Orders from "../pages/admin/Orders/Orders";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import Client from "../pages/client/Client";
import ClientLogin from "../pages/client/Login/Login"
import Basket from "../pages/client/Basket/Basket";
import ContactUs from "../pages/client/ContactUs/ContactUs";
import ProductDetail from "../pages/client/ProductDetail/ProductDetail";
import Register from "../pages/client/Register/Register";
import User from "../pages/client/User/User"
import MyProducts from "../pages/client/Products/Products";
import NotFound from "../pages/client/NotFound/NotFound";
import Home from "../pages/client/Home/Home"


export const ROUTES=[
    {
        path:"/admin",
        element:<Admin/>,
        children:[
            {
                index:true,
                element:<Login/>,
            },
            {
                path:"addCategory",
                element:<AddCategory/>
            },
            {
                path:"addProducts",
                element:<AddProducts/>
            },
            {
                path:"categories",
                element:<Categories/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"messages",
                element:<Messages/>
            },
            {
                path:"orders",
                element:<Orders/>
            },
            {
                path:"adminProducts",
                element:<Products/>
            },
            {
                path:"users",
                element:<Users/>
            },
        ],
    },
    {
        path:"/",
        element:<Client/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"clientlogin",
                element:<ClientLogin/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"contactUs",
                element:<ContactUs/>
            },
            {
                path:"productDetail",
                element:<ProductDetail/>
            },
            {
                path:"clientProducts",
                element:<MyProducts/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"user",
                element:<User/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]