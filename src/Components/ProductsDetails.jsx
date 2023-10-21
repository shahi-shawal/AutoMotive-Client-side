
import { useLoaderData } from "react-router-dom";
// import SingleDetails from "./SingleDetails";
import { toast } from "react-hot-toast";
import Navbar from "./Shared/Navbar";
import desh from "../../images/desh9.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { AuthContex } from "./Provider/AuthProvider";
import { useContext } from "react";

const ProductsDetails = () => {

    const {user}= useContext(AuthContex)
    const detailspro = useLoaderData()
    const {_id,name, brandname, image, price, shortdes,rating,type}=detailspro
    const usermail= user.email
    console.log(usermail);
    const handelCart=()=>{
       
        
    
        const myproducts={name,usermail, brandname, image, price}
    
       fetch('https://automotive-serverside-as10-pplrupq5u-shawals-projects.vercel.app/cart',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(myproducts)
       })
       .then(res=> res.json())
       .then(data=>{
        console.log(data);
        if (data.insertedId) {
          toast.success('Successfully Add to Cart')
        }
       })
    



    }
    return (
        <div >
        <div style={{
       backgroundImage: `url(${desh})`,
       backgroundPosition: "center",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
     }}
     className="w-full h-[40vh]">
       <div className="hero-overlay bg-opacity-60">
       <Navbar className="bg-gray-300"></Navbar>
       <h1 className="py-20 px-20  text-4xl font-bold text-white">{name}</h1>
       </div>
       </div>
    <div>
       <div className="max-w-6xl mx-auto mb-5">
       <div className="flex flex-row justify-between mt-10">
           <h1 className="text-2xl font-bold">{name}</h1>
           <h1 className="text-2xl font-bold text-red-700">${price}</h1>
       </div>
       <img className="w-1/2 mx-auto" src={image} alt=""  />
    <div>
       <h1 className="text-center font-bold text-2xl">GENERAL INFORMATION</h1>
       <hr className="bg-red-500 h-[3px] w-[30%] mx-auto mt-4 mb-4"></hr>
       <div className="flex flex-row justify-center gap-5">
       <p className="text-xl w-1/2 border-r-2 border-red-700">{shortdes}</p>
       <div className="">
       <p className="text-xl font-bold">Brand: <span className="text-red-700">{brandname}</span> </p>
       <p className="text-xl">Type:{type}</p>
       <button onClick={handelCart} className="btn bg-[#DB2D2E] mt-5 text-white hover:bg-gray-700">Add to Cart</button>
       </div>
       </div>
    </div>
    </div>
       </div>
       <Footer></Footer>
   </div>
    );
};

export default ProductsDetails;