
import { useLoaderData } from "react-router-dom";
// import SingleDetails from "./SingleDetails";
import Navbar from "./Shared/Navbar";
import desh from "../../images/desh9.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer";
const ProductsDetails = () => {

    
    const detailspro = useLoaderData()
    const {name, brandname, image, price, shortdes,rating,type}=detailspro
   
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
       <button className="btn bg-[#DB2D2E] mt-5 text-white hover:bg-gray-700">Add to Cart</button>
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