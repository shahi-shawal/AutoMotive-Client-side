import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import log  from "../../../images/log.png"



const Navbar = () => {
     
    const navlinks= <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/blog">Blog</NavLink></li>
     <li><NavLink to="/addproduct">Add Product</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    </>

   
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div >
    <img className="w-auto h-[80px]" src={log} alt="logo" srcset="" />
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal text-white px-1">
     {navlinks}
    </ul>
  </div>
  <div className="">
    <Link to="/login"><button className="btn">Login</button></Link>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;