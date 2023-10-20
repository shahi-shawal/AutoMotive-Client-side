import { useContext} from "react";

import {Navigate, useLocation} from "react-router-dom";
import { AuthContex } from "../Components/Provider/AuthProvider";


const PrivateRouter = ({children}) => {
    const {user, loading}= useContext(AuthContex)
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner text-error loading-lg"></span>
      }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default PrivateRouter;


