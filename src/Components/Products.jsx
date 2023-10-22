import Navbar from "./Shared/Navbar";
import ad1 from "../../images/ad2.webp"
import ad2 from "../../images/ad6.avif"
import ad3 from "../../images/a8.avif"
import desh from '../../images/ad4.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';    
import { Navigation } from 'swiper/modules';
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import ProductsCard from "./ProductsCard";
const Products = () => {
   
   const loadproducts = useLoaderData()
   console.log(loadproducts);
   const brandname = useParams()
    return (
        <div>
        <div style={{
          backgroundImage: `url(${desh})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[32vh] lg:h-[20vh]">
          <div className="hero-overlay bg-opacity-60">
          <Navbar className="bg-gray-300"></Navbar>
          <h1 className="py-36 px-20  text-4xl font-bold text-white">REGISTER</h1>
          </div>
          </div>
           {/* <Navbar></Navbar> */}
          <Swiper 
            navigation={true} modules={[Navigation]} className="mySwiper "
            
  >

    <SwiperSlide >
    <div style={{backgroundImage:`url(${ad2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
  }}  >
    <div className="my-10 lg:my-52 ">
    <h1 className="mb-5 text-white text-2xl lg:text-5xl font-bold">30% OFF FOR BMW BOOKING</h1>
    <p className="mb-5 text-xl lg:text-2xl text-white">From as low as <span className="text-red-700 font-bold">$20 per day</span>  with limited time offer discount</p>
    <button className="btn btn-xs lg:btn-lg bg-[#DB2D2E] text-white hover:bg-gray-700">Learn More</button>
    </div>
    
  </div>
    

    </SwiperSlide>
    
    <SwiperSlide >
    <div style={{backgroundImage:`url(${ad3})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
  }}  >
    <div className="my-10 lg:my-52 ">
    <h1 className="mb-5 text-white text-2xl lg:text-5xl font-bold">30% OFF FOR BMW BOOKING</h1>
    <p className="mb-5 text-xl lg:text-2xl text-white">From as low as <span className="text-red-700 font-bold">$20 per day</span>  with limited time offer discount</p>
    <button className="btn btn-xs lg:btn-lg bg-[#DB2D2E] text-white hover:bg-gray-700">Learn More</button>
    </div>
    
  </div>
    

    </SwiperSlide>
    
    <SwiperSlide >
    <div style={{backgroundImage:`url(${ad1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
  }}  >
    <div className="my-10 lg:my-52 ">
    <h1 className="mb-5 text-white text-2xl lg:text-5xl font-bold">30% OFF FOR BMW BOOKING</h1>
    <p className="mb-5 text-xl lg:text-2xl text-white">From as low as <span className="text-red-700 font-bold">$20 per day</span>  with limited time offer discount</p>
    <button className="btn btn-xs lg:btn-lg bg-[#DB2D2E] text-white hover:bg-gray-700">Learn More</button>
    </div>
    
  </div>
    

    </SwiperSlide>
    

  </Swiper>
  <h1 className="text-2xl font-bold text-center mt-4">Welcome our Exclusive Brands</h1>
          <div className="hover:w-[30%] mx-auto mb-10">
              <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto"></hr>
              </div>
    <div className="max-w-5xl mx-auto lg:gap-5 grid grid-cols-1 lg:grid-cols-2">
       {
        loadproducts.length > 1?  loadproducts.map((product, idx)=>  <ProductsCard key={idx} Brandname={brandname}  product={product}></ProductsCard>) : <h1 className="text-red-700 text-2xl mb-10 font-bold mx-auto">No product Available</h1>
         }
    </div>
         
        </div>
    );
};

export default Products;