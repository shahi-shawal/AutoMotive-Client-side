import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <div  className=" text-neutral-content">
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" my-40 ml-32">
      <h1 className="mb-5  text-5xl font-bold">10% OFF FOR ONLINE BOOKING</h1>
      <p className="mb-5 text-2xl">From as low as $10 per day with limited time offer discount</p>
      <button className="btn bg-[#DB2D2E] text-white hover:bg-gray-700">Learn More</button>
    </div>
  </div>
        </div>
    );
};

export default Banner;