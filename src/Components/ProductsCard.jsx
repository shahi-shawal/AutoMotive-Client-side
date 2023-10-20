import { Link } from "react-router-dom";


const ProductsCard = ({product}) => {
    const {_id,name, brandname,type, image, price, rating} = product
   
    return (
        <div >
       
         <div className="card  card-compact mt-5 w-80 bg-gray-100 shadow-xl">
            <figure ><img src={image} alt="Shoes" className=""/></figure>
            <div className="card-body">
              <div className="text-center">
              <h2 className="text-xl font-bold text-red-600">{name}</h2>
              <h1 className="text-xl font-bold">Brand:{brandname}</h1>
              <p className="text-xl">Type: {type}</p>
              <div className=" mx-auto">
              <hr className="bg-black h-[3px] w-[20%] mx-auto mt-2"></hr>
              <hr className="bg-black h-[3px] w-[30%] mx-auto mt-2 mb-2"></hr>
               
              </div>
              <p className="text-xl font-bold ">${price}</p>
              <p> Rating: {rating}</p>
              </div>
              <div className="card-actions justify-center">
                <Link to={`/products-details/${_id}`}>
                <button className="btn bg-[#DB2D2E] text-white hover:bg-gray-700">Details</button>
                </Link>
               <Link to={`/products-update/${_id}`}>
               <button className="btn bg-gray-700 text-white hover:bg-[#DB2D2E] ">Update</button>
               </Link>
              </div>
            </div>
          </div>
       
        </div>
    );
};

export default ProductsCard;