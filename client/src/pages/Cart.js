import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const [products, setproducts] = useState([]);
  const userid = localStorage.getItem("paricollectionuserId");
  const nav = useNavigate();

  const fetchData = async () => {
    try {
        const response = await fetch(
          "https://ecommercebackend-32ve.onrender.com/getCartfororders",
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

const remove = async (id) => {
  try {
  const response = await fetch(
    `https://ecommercebackend-32ve.onrender.com/deleteCartfororders/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    alert("Removed");
    fetchData()
  } else {
    alert("something went wrong");
  }
} catch (error) {
  console.error("Error during login:", error);
}
}

useEffect(() => {
  fetchData();
}, []);


  return (
    <div>
      <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
    <div className="w-full relative bg-white overflow-hidden text-left text-9xl text-black font-inter m-5">
      <div className="m-5">
        <span className="font-semibold">My Cart</span>
        <b> </b>
        <span>({products.filter((e)=>(e.userid===userid)).length})</span>
      </div>

<div className="w-1/4 mx-auto rounded-11xl bg-blue-700 flex flex-row items-center justify-center py-2.5 px-8 cursor-pointer" onClick={()=>{
       nav('/cart-page');
      }}>
        <div className="relative text-sm font-semibold text-white">Order Now {products.filter((e)=>(e.userid===userid)).length} Items</div>
      </div>

      <div className='grid grid-cols-1 md:w-[72%] mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-5 md:gap-10 lg:gap-9 m-5 gap-8'>
      {
          products.filter((e)=>(e.userid===userid)).map(product =>(
            <div className="font-inter md:ml-2 lg:ml-0 relative">
                <div className="w-full lg:w-[95%] rounded-br-[135px] mt-2 rounded-bl-xl rounded-t-xl shadow-dimgray-600 shadow-lg relative">
                <a
              key={product._id}
              href=''
              className="no-underline"
              onClick={(e) => {
                e.preventDefault();
                nav('/material-page', { state: { id: product._id } });
              }}
            >
                  <img
                    className="w-full h-[300px] object-cover rounded-t-xl"
                    alt=""
                    src={product.image1}
                  />
                    </a>
                  <div className="mt-0 rounded-br-[135px] rounded-bl-xl shadow-dimgray-600 shadow-lg bg-bisque h-full">
                    <div className="font-sans text-black text-xl font-bold pt-5 pb-3 pl-2">
                      {product.title}
                    </div>
                    <div className="font-semibold pl-2 text-gray-500 pb-4">
                      ₹{product.price}
                    </div>
                    <img
                      className="pl-3 max-h-full w-[80%]"
                      alt=""
                      src="/vector-13.svg"
                    />
                    <div className="text-xs text-gray-500 pb-2 pl-2 mt-1">
                      MRP incl. of all taxes
                    </div>
                    <div className=" border-2 rounded-full w-[100px] h-[100px] border-rose-800 overflow-hidden absolute bottom-0 right-0   m-[-12px] cursor-pointer" onClick={()=>{
          remove(product._id)
        }}>
                    <i  class="fa p-3">&#xf014;</i>
                      </div>
                  </div>
                </div>
              </div>
          ))}
      </div>
    </div>
    <div className="mt-auto ">
        <FrameComponent1
          frame10="/frame-10.svg"
          frame11="/frame-11.svg"
          frame12="/frame-12.svg"
          frame14="/frame-14.svg"
          propBackgroundColor="salmon"
          propBackgroundColor1="whitesmoke"
          propBackgroundColor2="salmon"
        />
      </div>
    </div>
  );
};

export default Cart;