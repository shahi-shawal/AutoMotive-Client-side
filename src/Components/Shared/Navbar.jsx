import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import log  from "../../../images/log.png"
import sun from "../../../images/sun.png"
import moon from "../../../images/moon.png"
import { Toaster } from "react-hot-toast";
import { AuthContex } from "../Provider/AuthProvider";
import { useContext } from "react";
import { useState, useEffect } from "react";



const Navbar = ({cartLength}) => {
  
  const {user, logout}= useContext(AuthContex)
  const handelsignOut=()=>{
     logout()
   navigate("/")
  }
     
    const navlinks= <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/blog">Blog</NavLink></li>
    {
      user &&  <li><NavLink to="/addproduct">Add Product</NavLink></li>
    }
    <li><NavLink to="/about">About</NavLink></li>
    </>

    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
  
    // update state on toggle
    const handlemode = (e) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  
    
    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar">
            <Toaster/>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fc0606] text-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-[#DB2D2E] rounded-box w-52">
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

  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn mr-2 btn-white btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
         {
          cartLength > 0 &&  <span className="badge badge-error indicator-item font-bold">{cartLength}</span>
         }
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cartLength}items</span>
          <span className="text-red-600">Subtotal: $999</span>
          <div className="card-actions">
           <Link to="/cart"> <button className="btn bg-[#DB2D2E] text-white hover:bg-gray-700 btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
  </div>
  <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handlemode}
              checked={theme !== "light"}
            />
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
  <div className="">
    {
      user? <>
       <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL? user.photoURL : "None"} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#DB2D2E] rounded-box w-52 text-white font-bold">
        <li>
          <a className="justify-between">
            {
              user?.displayName? user.displayName :"Your Name"
            }
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handelsignOut} ><a>Logout</a></li>
      </ul>
    </div>
   

      </>
      :
      <Link to="/login">
    <button className="btn ">Log in</button>
    </Link>
    }
    
  </div>
  
  </div>
</div>



        </div>
    );
};

export default Navbar;