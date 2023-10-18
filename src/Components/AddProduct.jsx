import Navbar from "./Shared/Navbar";
import desh from "../../images/desh7.webp"
import Footer from "./Footer";


const AddProduct = () => {
    return (
        <div>
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
            <h1 className="py-36 px-20  text-4xl font-bold text-white">ADD PRODUCT</h1>
            </div>
            <div className="mt-20 text-center">
                <h1 className="text-3xl font-bold">Add Your Product </h1>
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
            <span className="label-text">Product Image</span>
          </label>
          <input type="text" placeholder="Image" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" placeholder="Brand Name" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" placeholder="Type" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input type="text" placeholder="Short description" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating out of 5" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#DB2D2E] text-white hover:bg-gray-700">Add Product</button>
        </div>
       
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddProduct;