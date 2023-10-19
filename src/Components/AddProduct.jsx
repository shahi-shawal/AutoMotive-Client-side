import Navbar from "./Shared/Navbar";
import desh from "../../images/desh7.webp"
import Footer from "./Footer";
import { toast } from "react-hot-toast";


const AddProduct = () => {
 

  const handelSubmit=e=>{
    e.preventDefault()
    const form= e.target
    const name = form.name.value
    const image = form.image.value
    const brandname = form.brandname.value
    const rating = form.rating.value
    const shortdes = form.shortdes.value
    const price = form.price.value
    const type = form.type.value
    
    console.log(name,image,brandname,rating,shortdes,price,type);
    const myproducts={name,image,brandname,rating,shortdes,price,type}

   fetch('http://localhost:5001/products',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(myproducts)
   })
   .then(res=> res.json())
   .then(data=>{
    console.log(data);
    if (data.insertedId) {
      toast.success('Successfully add your product')
      form.reset()
    }
   })



  }



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
      <form onSubmit={handelSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input type="text" name="image" placeholder="Image" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" name="type" placeholder="Type" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input type="text" name="shortdes" placeholder="Short description" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating out of 5" className="input input-bordered bg-gray-200" required />
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-[#DB2D2E] text-white hover:bg-gray-700" type="submit" value="ADD PRODUCT" />
          
        </div>
       
      </form>
    </div>
  </div>
 
</div>
<Footer></Footer>
        </div>
        </div>
        
        </div>
    );
};

export default AddProduct;