import ford from "../../images/ford.jpg";
import brand1 from "../../images/brands1.jpg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BrandName = () => {
    const [brand, setBrand]=useState([])

    useEffect(()=>{
        fetch("/Brand.json")
        .then(res=> res.json())
        .then(data=> setBrand(data))
    },[])
  return (
    <div
      style={{
        backgroundImage: `url(${ford})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[100vh] mt-10"
    >
      <div className="hero-overlay bg-black bg-opacity-60">
        <div className="py-20 text-center">
          <h1 className="text-white">Check out our recent Brands</h1>
          <h1 className="text-3xl text-white font-bold">FEATURE BRANDS</h1>
          <hr className="bg-red-500 h-[1px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[1px] w-[10%] mx-auto"></hr>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {
                brand.map((brands)=><Link to={`/brands/${brands.Brandname}`}>
                <div className="card  bg-opacity-60 hover:bg-[#DB2D2E]  shadow-xl image-full">
                <figure><img src={brands.Brandimg} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{brands.Brandname}</h2>
                
                </div>
              </div>
                
                </Link>
                  )
            }
        
        </div>
      </div>
    </div>
  );
};

export default BrandName;
