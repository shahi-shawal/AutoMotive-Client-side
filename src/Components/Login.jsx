import Navbar from "./Shared/Navbar";
import desh from "../../images/desh5.jpg"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div style={{
            backgroundImage: `url(${desh})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[50vh]">
            <div className="hero-overlay bg-opacity-60">
            <Navbar className="bg-gray-300"></Navbar>
            <h1 className="py-36 px-20  text-4xl font-bold text-white">LOGIN</h1>
            </div>
            <div className="mt-20 text-center">
                <h1 className="">Log in with your id or social media</h1>
                <h1 className="text-3xl font-bold"> LOGIN TO YOUR ACCOUNT</h1>
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
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-gray-200" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <h1 className="text-center">Dont Have an Account? <Link to="/register" className="text-red-600 font-bold">Register</Link></h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#DB2D2E] text-white hover:bg-gray-700">Login</button>
        </div>
        <div>
            <h1 className="text-xl font-bold text-center">Login with Social Media </h1>
            <div className="text-center mt-2">
            <button className="btn border rounded-lg bg-black hover:bg-[#DB2D2E] text-white">GOOGLE LOGIN</button>
            </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;