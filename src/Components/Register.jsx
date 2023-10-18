import Navbar from "./Shared/Navbar";
import desh from "../../images/desh6.webp"
import { Link } from "react-router-dom";

const Register = () => {
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
            <Navbar className="bg-gray-300"></Navbar>
            <h1 className="py-36 px-20  text-4xl font-bold text-white">REGISTER</h1>
            </div>
            <div className="mt-20 text-center">
                <h1 className="">REGISTER with your id or social media</h1>
                <h1 className="text-3xl font-bold"> REGISTER TO YOUR ACCOUNT</h1>
              <div className="hover:w-[30%] mx-auto">
              <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto"></hr>
              </div>
            </div>
            <div className=" w-1/2 mx-auto" >
  <div className="flex-col lg:flex-row-reverse">
    <div className="card  w-full ">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-gray-200" required />
          
          <h1 className="text-center mt-2">Already Have an Account? <Link to="/login" className="text-red-600 font-bold">Login</Link></h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#DB2D2E] text-white hover:bg-gray-700">Register</button>
        </div>
       
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;