import { Outlet } from "react-router-dom";


const MainRoot = () => {
    return (
        <div>
           <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;