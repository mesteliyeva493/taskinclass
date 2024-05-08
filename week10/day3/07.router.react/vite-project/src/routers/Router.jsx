import AddCountry from "../pages/admin/AddCountry/AddCountry";
import Countries from "../pages/admin/Countries/Countries";
import CountryDetail from "../pages/admin/CountryDetail/CountryDetail";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import About from "../pages/client/About/About";
import Contact from "../pages/client/Contact/Contact";
import Home from "../pages/client/Home/Home";
import Login from "../pages/admin/Login/Login";
import Client from "../pages/client/Client";
import NotFound from "../pages/client/NotFound/NotFound";
import Admin from "../pages/admin/Admin";
import MyCountries from "../pages/client/Countries/Countries";

export const Router=[
    {
        path:"/admin",
        element:<Admin/>,
        children:[
            {
                index:true,
                element:<Dashboard/>,
            },
            
            {
                path:"country",
                element:<Countries/>,
            },
            {
                path:"add-country",
                element:<AddCountry/>,
            },
            {
                 path:"admin-country-detail",
                element:<CountryDetail/>,
            },
            {
                path:"login",
               element:<Login/>,
           },
        ],
    },

    {
        path:"/",
        element:<Client/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"countries",
                element:<MyCountries/>
            },
            {
                path:"country-detail/:id",
                element:<CountryDetail/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]




