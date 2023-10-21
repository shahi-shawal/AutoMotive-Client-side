import React, { useContext, useState } from 'react';
import Navbar from "./Shared/Navbar";
import desh from "../../images/cart2.jpg"
import { AiOutlineDelete } from "react-icons/ai";
import Footer from "./Footer";

import { useLoaderData } from 'react-router-dom';
import { AuthContex } from './Provider/AuthProvider';
import { toast } from 'react-hot-toast';
const Cart = () => {
    const loadcartItem = useLoaderData()
    const [cartItem,setCartitem]= useState(loadcartItem)
    const {user}= useContext(AuthContex)
   const mail = user.email
   console.log(mail);

    const cartInfo = cartItem.filter((car)=> car.usermail === user.email)
    console.log(cartInfo);

    const handelcartDelete=(_id)=>{
       console.log(_id);

       fetch(`https://automotive-serverside-as10-pplrupq5u-shawals-projects.vercel.app/cart/${_id}`, {
        method:"DELETE"
       })
       .then(res=> res.json())
       .then(data=>{
        console.log(data);
        
        if (data.deletedCount > 0) {
         toast.success("Product Deleted Your Cart")
            
        }
        const remainging = cartItem.filter((cars)=> cars._id !==_id)
        setCartitem(remainging)
       })
    }
    return (
        <div>
             <div style={{
            backgroundImage: `url(${desh})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[50vh]">
            <div className="hero-overlay bg-opacity-60">
            <Navbar cartInfo={cartInfo} className="bg-gray-300"></Navbar>
            <h1 className="py-36 px-20  text-4xl font-bold text-white">My Cart</h1>
            </div>
            </div>
            <div className='mt-10 mb-10 max-w-5xl mx-auto'>
                <h1 className='text-black text-2xl text-center font-bold'>Order List</h1>
                <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto mb-4"></hr>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cartInfo.map((cartin)=> <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="border rounded-full w-20 h-20">
                <img className='' src={cartin.image} alt="p_image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{cartin.name}</div>
             
            </div>
          </div>
        </td>
        <td>
          {cartin.brandname}
          <br/>
        </td>
        <td>{cartin.price}</td>
        <th>
          <button onClick={()=>handelcartDelete(cartin._id)} className="btn bg-[#DB2D2E] text-white hover:bg-gray-700 text-2xl btn-xl"><AiOutlineDelete /></button>
        </th>
      </tr>)
      }
   </tbody>
     
    
  </table>
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;