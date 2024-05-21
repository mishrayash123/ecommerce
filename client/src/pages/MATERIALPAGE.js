import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import Property1Frame2 from "../components/Property1Frame2";
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const MATERIALPAGE = () => {
  const location = useLocation();
  const [products, setproducts] = useState([]);
  const userid = localStorage.getItem("paricollectionuserId");
  const nav = useNavigate();
  const [size, setsize] = useState("x");
  const [quantity, setquantity] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ecommercebackend-32ve.onrender.com/getproducts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setproducts(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleaddtowishlist = async (productid, title, color, gender, size, price, description, details, category, subcategory, subcategory1, image1, image2, image3, image4) => {
    try {
      const response = await fetch("https://ecommercebackend-32ve.onrender.com/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid, productid, title, color, gender, size, price, description, details, category, subcategory, subcategory1, image1, image2, image3, image4
        }),
      });

      if (response.ok) {
        alert("Added to wishlist");
      } else {
        alert("Already in wishlist");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };


  const handleaddtocart = async (productid, title, color, gender, price, description, details, category, subcategory, subcategory1, image1, image2, image3, image4) => {

    try {
      const response = await fetch("https://ecommercebackend-32ve.onrender.com/addtocartfororders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid, productid, title, color, gender, size, quantity, price, description, details, category, subcategory, subcategory1, image1, image2, image3, image4
        }),
      });

      if (response.ok) {
        alert("Added to cart");
      } else {
        alert("Already in cart");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };



  return (
    <div className="w-full text-lg text-gray-600 font-made-tommy">
      <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg" basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />


      {products.filter((e) => (e._id == location.state.id)).map(products => (
        
          <div className="flex w-full  mt-12 flex-col md:flex-row">
            <div className="md:w-1/3  w-full h-full flex flex-col">
              <img
                className="border-4 border-black overflow-hidden"
                alt=""
                src={products.image2}
              />
              <img
                className="hidden overflow-hidden md:inline-block mt-4"
                alt=""
                src={products.image1}
              />
            </div>

            <div className="md:w-2/3 w-full ">


              <div className="flex ml-10 mt-20 flex-col ">

                <b className=" md:text-29xl text-17xl font-inter text-black">
                  {products.title}
                </b>
                <div className="text-base font-poppins text-dimgray-300">
                  {products.category}
                </div>

                <img
                  className=" w-full"
                  alt=""
                  src="/vector-8.svg"
                />

                <b className=" text-9xl md:text-17xl font-inter text-gray-800">
                  {products.price}
                </b>

                <div className=" text-sm lg:text-xl font-inter">
                  MRP incl. of all taxes
                </div>
                {/* here will be sizes  */}










                <div className="text-xl mb-3 font-semibold font-inter mt-4">
                  Please select a size.
                </div>


                <div className="md:flex text-center  text-[10px] md:text-[20px] md:flex-row  md:flex-wrap grid grid-cols-3 gap-2">
                  <div className="relative py-2 px-3 text-darkgray-200 rounded-[10px] border-[2px] border-solid border-darkgray-200">
                    XXS
                    <span className="absolute inset-0 flex items-center justify-center">
                      <img
                        className="w-full h-full object-contain"
                        alt=""
                        src="/vector-9.svg"
                      />
                    </span>
                  </div>
                  <div className="relative py-2 px-3 text-darkgray-200 rounded-[10px] border-[2px] border-solid border-darkgray-200">
                    XS
                    <span className="absolute inset-0 flex items-center justify-center">
                      <img
                        className="w-full h-full object-contain"
                        alt=""
                        src="/vector-9.svg"
                      />
                    </span>
                  </div>
                  <div className="py-2 px-3 text-black rounded-[10px] border-[2px] border-solid border-black">S</div>
                  <div className="py-2 px-3 text-salmon-100 rounded-[10px] border-[2px] border-solid border-salmon-100">M</div>
                  <div className="py-2 px-3 text-black rounded-[10px] border-[2px] border-solid border-black">L</div>
                  <div className="py-2 px-3 text-black rounded-[10px] border-[2px] border-solid border-black">XL</div>
                  <div className="relative py-2 px-3 text-darkgray-200 rounded-[10px] border-[2px] border-solid border-darkgray-200">
                    XXL
                    <span className="absolute inset-0 flex items-center justify-center">
                      <img
                        className="w-full h-full object-contain"
                        alt=""
                        src="/vector-9.svg"
                      />
                    </span>
                  </div>
                  <div className="relative py-2 px-3 text-darkgray-200 rounded-[10px] border-[2px] border-solid border-darkgray-200">
                    XXXL
                    <span className="absolute inset-0 flex items-center justify-center">
                      <img
                        className="w-full h-full object-contain"
                        alt=""
                        src="/vector-9.svg"
                      />
                    </span>
                  </div>

                </div>


                <div className="md:text-xl text-xs font-inter mt-2 flex flex-row items-center">
                  <span className="flex items-center">
                    <b>Size not available?</b>
                    <span className="font-semibold whitespace-pre-wrap">{`  `}</span>
                  </span>
                  <span className="[text-decoration:underline] text-salmon-100 md:mt-2 sm:mt-0 sm:ml-2">
                    Notify Me
                  </span>
                </div>

                <div className="text-xl mt-4 font-inter flex flex-col md:flex-row gap-4">
                  <div className="rounded-lg box-border flex md:flex-col gap-2 flex-row items-center w-full md:w-auto">
                    <label htmlFor="availableSize" className="text-black text-base font-bold ">Size</label>
                    <select
                      id="availableSize"
                      className="border border-solid border-darkgray-300 rounded text-xl px-4 py-2 focus:outline-none focus:border-blue-500"
                      onChange={(e) => setsize(e.target.value)}
                    >
                      <option value="XXS">XXS</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                  </div>
                  <div className="rounded-lg box-border flex md:flex-col flex-row  gap-2 md:w-auto">
                    <label htmlFor="productPrice" className="text-black text-base font-bold ">Quantity</label>
                    <input
                      type="number"
                      id="productPrice"
                      className="border border-solid border-darkgray-300 rounded text-xl px-4 py-2 focus:outline-none focus:border-blue-500 w-32"
                      placeholder="Enter Quantity"
                      onChange={(e) => setquantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                </div>



                {/* *******************cart and wishlist button****************** */}
                <div className="flex w-[80%] mb-10 flex-col justify-center md:flex-row mt-10 gap-2">
                  <div className="rounded-md text-sm bg-salmon-100  py-1.5 text-center justify-center w-full md:text-5xl text-white cursor-pointer" onClick={() => {

                    handleaddtocart(products._id, products.title, products.color, products.gender, products.price, products.description, products.details, products.category, products.subcategory, products.subcategory1, products.image1, products.image2, products.image3, products.image4);
                  }} >
                    <div className="relative font-medium" >ADD TO CART</div>
                  </div>
                  <div className="rounded-md bg-white text-sm  text-center md:text-5xl w-full py-1.5 text-salmon-100 border-[2px] border-solid border-salmon-100 cursor-pointer" onClick={() => {
                    handleaddtowishlist(products._id, products.title, products.color, products.gender, products.size, products.price, products.description, products.details, products.category, products.subcategory, products.subcategory1, products.image1, products.image2, products.image3, products.image4);
                  }}>
                    <div className="relative font-medium">ADD TO WISHLIST</div>
                  </div>
                </div>

                <div className="flex md:flex-row gap-4 flex-col ">
                  <b className="mb-0">share</b>
                  <div>
                    <img
                      className="rounded-14xl w-[50px] h-[50px] overflow-hidden"
                      alt=""
                      src="/frame-103.svg"
                    />
                    <img
                      className="rounded-11xl w-[50px] h-[50px] overflow-hidden"
                      alt=""
                      src="/frame-113.svg"
                    />
                    <img
                      className=" rounded-19xl w-[50px] h-[50px] overflow-hidden"
                      alt=""
                      src="/frame-124.svg"
                    />
                    <img
                      className=" rounded-27xl w-[50px] h-[50px] overflow-hidden"
                      alt=""
                      src="/frame-144.svg"
                    />
                  </div>
                </div>

                <div>
                <Property1Frame2  description={products.description} details={products.details}  />

                </div>
              </div>
            </div>





          </div>




        
      ))}


<div  className="mt-20" >
<FrameComponent1
       
        frame10="/frame-10.svg"
        frame11="/frame-11.svg"
        frame12="/frame-123.svg"
        frame14="/frame-143.svg"
        propTop="unset"
        propBottom="0px"
        propBackgroundColor="#ff6868"
        propBackgroundColor1="#ebebeb"
        propBackgroundColor2="#ff6868"
      />
</div>
      
       
    </div>

  );
};

export default MATERIALPAGE;