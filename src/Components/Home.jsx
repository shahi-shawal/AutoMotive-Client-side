import Navbar from "./Shared/Navbar";
import bg1 from "../../images/por.jpg";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Section1 from "./Shared/Section1";
const Home = () => {
  return (
    <div>
      <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[100vh]"
    >
       {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
     <div className="hero-overlay bg-opacity-40">
     <Navbar></Navbar>
     <hr></hr>
      <Banner></Banner>
     </div>
     
    </div>
    <Section1></Section1>
    </div>
  );
};

export default Home;
