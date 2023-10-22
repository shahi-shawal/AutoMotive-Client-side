import ser1 from "../../../images/ser1.png"
import ser2 from "../../../images/ser2.png"
import ser3 from "../../../images/ser3.webp"
import ser4 from "../../../images/ser4.png"
import ser5 from "../../../images/ser5.png"
import ser6 from "../../../images/ser6.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Service = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div   className="max-w-6xl mx-auto">
            <div className="mt-20 text-center">
                <h1 className="text-3xl font-bold">Our Services</h1>
              <div className="hover:w-[30%] mx-auto">
              <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto"></hr>
              </div>
            </div>
            <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-3  mt-10">
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={ser1} alt="" />
                    <h1 className="mt-4 font-bold text-red-600">Drivers</h1>
                    <p className="mt-2">We provide our Driver</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={ser2} alt=""  />
                    <h1 className="mt-4 font-bold text-red-600">Birthday Gifts</h1>
                    <p className="mt-2">We will support any time any where </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={ser3} alt="" />
                    <h1 className="mt-4 font-bold text-red-600">Airport Transfer</h1>
                    <p className="mt-2">We are provide Airport Transfer</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={ser4} alt=""  />
                    <h1 className="mt-4 font-bold text-red-600">Wedding Trip</h1>
                    <p className="mt-2 mb-5">We provide Wedding Trip</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={ser5} alt=""  />
                    <h1 className="mt-4 font-bold text-red-600">Luxury Transport</h1>
                    <p className="mt-2 mb-5">Luxury Transport Enjoy with us</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={ser6} alt=""  />
                    <h1 className="mt-4 font-bold text-red-600">Gift Transport</h1>
                    <p className="mt-2 mb-5">We are Provide Door to Door Gift delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Service;