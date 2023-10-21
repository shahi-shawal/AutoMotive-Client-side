import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddProduct from "../Components/AddProduct";
import Products from "../Components/Products";
import ProductsDetails from "../Components/ProductsDetails";
import Update from "../Components/Update";
import PrivateRouter from "./PrivateRouter";
import Error from "../Components/Error";
import Cart from "../Components/Cart";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainRoot></MainRoot>,
        errorElement:<Error></Error>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addproduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/brands/:brandname",
            element:<Products></Products>,
            loader:({params})=> fetch(` https://automotive-serverside-as10-pplrupq5u-shawals-projects.vercel.app/products/${params.brandname}`)
        },
        {
            path:"/products-details/:id",
            element:<PrivateRouter><ProductsDetails></ProductsDetails></PrivateRouter>,
            loader:({params})=> fetch(` https://automotive-serverside-as10-pplrupq5u-shawals-projects.vercel.app/products/1/${params.id}`)

        },
        {
            path:"/products-update/:id",
            element:<PrivateRouter><Update></Update></PrivateRouter>,
            loader:({params})=> fetch(` https://automotive-serverside-as10-pplrupq5u-shawals-projects.vercel.app/products/1/${params.id}`)

        },
        {
            path:"/cart",
            element:<PrivateRouter><Cart></Cart></PrivateRouter>,
            loader:()=> fetch(`https://automotive-serverside-as10-pplrupq5u-shawals-projects.vercel.app/cart`)
        }
    ]
    }
])

export default Router;