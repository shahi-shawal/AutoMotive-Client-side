import icon1 from "../../../images/icon (1).png"
import icon2 from "../../../images/icon (2).png"
import icon3 from "../../../images/icon (3).png"
import icon4 from "../../../images/icon (4).png"

const Section1 = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mt-20 text-center">
                <h1 className="">Welcome to our website</h1>
                <h1 className="text-3xl font-bold">CHOICE YOUR CAR</h1>
              <div className="hover:w-[30%] mx-auto">
              <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto"></hr>
              </div>
                <p className="mt-4">The premier online destination for all things automotive!
                 Our car show website is your one-stop hub for enthusiasts, car buyers,<br></br> and anyone passionate about the world of automobiles.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-10">
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={icon2} alt="" srcset="" />
                    <h1 className="mt-4 font-bold">ALL BRANDS</h1>
                    <p className="mt-2">We provide almost All bradns of Car</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={icon3} alt="" srcset="" />
                    <h1 className="mt-4 font-bold">FREE SUPPORT</h1>
                    <p className="mt-2">We will support any time any where </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={icon1} alt="" srcset="" />
                    <h1 className="mt-4 font-bold">DRIVING</h1>
                    <p className="mt-2">Enjoy Your Driving With us</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="border rounded-full bg-gray-300 hover:bg-red-600 p-6 h-32" src={icon4} alt="" srcset="" />
                    <h1 className="mt-4 font-bold">AFFORDABLE</h1>
                    <p className="mt-2">We provide affordable price only for you</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;