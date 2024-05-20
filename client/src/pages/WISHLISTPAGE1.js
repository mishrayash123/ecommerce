import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const WISHLISTPAGE1 = () => {
  const [products, setproducts] = useState([]);
  const userid = localStorage.getItem("paricollectionuserId");
  const nav = useNavigate();

  const fetchData = async () => {
    try {
        const response = await fetch(
          "https://ecommercebackend-32ve.onrender.com/getCart",
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
          console.log(data)
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
    `https://ecommercebackend-32ve.onrender.com/deleteCart/${id}`,
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
    <div className="w-full relative bg-white h-[1588px] overflow-hidden text-left text-9xl text-black font-inter m-5">
                                             {/* <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" /> */}
      <div className="m-5">
        <span className="font-semibold">My Wishlist</span>
        <b> </b>
        <span>({products.filter((e) => (e.userid === userid)).length})</span>
      </div>
      {/* <FrameComponent1
        frame10="/frame-10.svg"
        frame11="/frame-11.svg"
        frame12="/frame-12.svg"
        frame14="/frame-14.svg"
        propTop="unset"
        propBottom="0px"
        propBackgroundColor="#ff6868"
        propBackgroundColor1="#ebebeb"
        propBackgroundColor2="#ff6868"
      /> */}
      <div className='grid grid-cols-1 md:w-[72%] mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-5 md:gap-10 lg:gap-9 '>
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
      // <div className="shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] font-inter">
      //   <div className="relative top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
      //     <img
      //       className="relative top-[229px] left-[179px] w-6 h-6 overflow-hidden"
      //       alt=""
      //       src="/mingcuteupfill.svg"
      //     />
      //     <a href='' onClick={
      //         (e) => {
      //           nav('/material-page', { state: { id: products.productid} });
      //         }
      //     }>
      //     <img
      //       className="absolute top-[-1px] left-[calc(50%_-_146px)] w-[293px] h-[391px] object-cover"
      //       alt=""
      //       src={products.image1}
      //     />
      //     </a>
      //     <div className="absolute top-[459px] left-[15px]">
      //       {products.title}
      //     </div>
      //     <img
      //       className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
      //       alt=""
      //       src="/vector-13.svg"
      //     />
      //     <div className="absolute top-[488px] left-[15px] font-semibold">
      //       ₹{products.price}
      //     </div>
      //     <div className="absolute top-[528px] left-[16px] text-2xs">
      //       MRP incl. of all taxes
      //     </div>
      //     <div className="text-black absolute top-[450px] left-[280px] font-bold text-base cursor-pointer" onClick={()=>{
      //     remove(products._id)
      //   }}>Delete</div>
      //     <div className="absolute top-[0px] left-[313px] bg-whitesmoke-100 w-[54px] h-[390px]" />
      //     <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[54px] h-[390px]" />
      //   </div>
      // </div>
          ))}
      </div>
    </div>
  );
};

export default WISHLISTPAGE1;
