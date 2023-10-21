import Navbar from "./Shared/Navbar";
import desh from "../../images/desh6.webp"
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { AuthContex } from "./Provider/AuthProvider";

const Register = () => {

  const {createUser}= useContext(AuthContex)
    const navigate = useNavigate()
    const handelregister=e=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const image = e.target.image.value

        console.log(email,password);


        if (password.length < 6) {
        return toast.error("Password should be at least 6 characters");
      } else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
         return toast.error("Password should contain at least one uppercase letter and one special character");
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        return  toast.error("Please check your email and provide a valid email address");
      }

         createUser(email, password)
         .then(result=> {
            // const cuser= result.user;
           toast.success("Successfully register")
           updateProfile(result.user, {
            displayName:name,
            photoURL:image
           })
           .then()
           .catch()
           navigate("/")
           return 
         })
         .catch(error=>{
            console.error(error)
            toast.error("Check your email and password")
            return 
         } )

        
  

         e.target.reset()
    }



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
                <h1 className="">REGISTER with your id </h1>
                <h1 className="text-xl lg:text-3xl font-bold"> REGISTER TO YOUR ACCOUNT</h1>
              <div className="hover:w-[30%] mx-auto">
              <hr className="bg-red-500 h-[3px] w-[20%] mx-auto mt-4 mb-4"></hr>
               <hr className="bg-red-500 h-[3px] w-[10%] mx-auto"></hr>
              </div>
            </div>
            <div className=" lg:w-1/2 mx-auto" >
  <div className="flex-col lg:flex-row-reverse">
    <div className="card  w-full ">
      <form onSubmit={handelregister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="image" placeholder="Photo URL" className="input input-bordered bg-gray-200" required />
        </div>
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
          <input type="password" name="password"
           placeholder="password" className="input input-bordered bg-gray-200" required />
          
          <h1 className="text-center mt-2">Already Have an Account? <Link to="/login" className="text-red-600 font-bold">Login</Link></h1>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-[#DB2D2E] text-white hover:bg-gray-700" type="submit" value="Register" />
        </div>
       
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
        </div>
    );
};

export default Register;