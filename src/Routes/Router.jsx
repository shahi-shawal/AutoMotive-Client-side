import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddProduct from "../Components/AddProduct";
import Products from "../Components/Products";
import ProductsDetails from "../Components/ProductsDetails";
import Update from "../Components/Update";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainRoot></MainRoot>,
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
            element:<ProductsDetails></ProductsDetails>,
            loader:({params})=> fetch(`http://localhost:5001/products/1/${params.id}`)

        },
        {
            path:"/products-update/:id",
            element:<Update></Update>,
            loader:({params})=> fetch(`http://localhost:5001/products/1/${params.id}`)

        }
    ]
    }
])

export default Router;