import Navbar from "./Shared/Navbar";
import desh from "../../images/desh5.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast";         
import { FcGoogle  } from 'react-icons/fc';
import { AuthContex } from "./Provider/AuthProvider";

const Login = () => {


  const navigate = useNavigate()
  const location = useLocation()
const {login, googlelogin}= useContext(AuthContex)
  const handellogin=e=>{
      e.preventDefault();
      const email = e.target.email.value
      const password = e.target.password.value
      

      console.log(email,password);

      if (password.length < 6) {
        return toast.error("Password should be at least 6 characters");
      } else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
         return toast.error("Password should contain at least one uppercase letter and one special character");
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        return  toast.error("Please check your email and provide a valid email address");
      }



      login(email,password)
      .then((result)=>{
          console.log(result.user)
          navigate(location?.state? location.state : "/")
          return  toast.success("Log in successfully")
           
       
      })
      .catch((error)=>{
       console.error(error)
      return toast.error("Check your Email and Password")
      })
      e.target.reset()
      


  }

 const handelGooglelogin=()=>{
  googlelogin()
  navigate(location?.state? location.state : "/")
  toast.success("Log in successfully")
   return
 }




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
                <h1 className="text-xl lg:text-3xl font-bold"> LOGIN TO YOUR ACCOUNT</h1>
              <div className="hover:w-[30%] mx-auto">
              <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto"></hr>
              </div>
            </div>
            <div className=" lg:w-1/2 mx-auto" >
  <div className="flex-col lg:flex-row-reverse">
    <div className="card  w-full ">
      <form onSubmit={handellogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-200" required />
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
            <button onClick={handelGooglelogin} className="btn border rounded-lg bg-black hover:bg-[#DB2D2E] text-white"><FcGoogle className="text-2xl" />GOOGLE LOGIN</button>
            </div>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Login;