import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Components/Home";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainRoot></MainRoot>,
        children:[{
            path:"/",
            element:<Home></Home>
        }]
    }
])

export default Router;