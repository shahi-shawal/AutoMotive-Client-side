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
            loader:({params})=> fetch(`http://localhost:5001/products/${params.brandname}`)
        },
        {
            path:"/products-details/:id",
            element:<PrivateRouter><ProductsDetails></ProductsDetails></PrivateRouter>,
            loader:({params})=> fetch(`http://localhost:5001/products/1/${params.id}`)

        },
        {
            path:"/products-update/:id",
            element:<PrivateRouter><Update></Update></PrivateRouter>,
            loader:({params})=> fetch(`http://localhost:5001/products/1/${params.id}`)

        },
        {
            path:"/cart",
            element:<Cart></Cart>,
            loader:()=> fetch(`http://localhost:5001/cart`)
        }
    ]
    }
])

export default Router;