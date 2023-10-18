import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddProduct from "../Components/AddProduct";


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
        }
    ]
    }
])

export default Router;