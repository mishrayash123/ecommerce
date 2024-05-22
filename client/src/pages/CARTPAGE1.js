import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useMemo } from "react";

const CARTPAGE1 = ({ propTop }) => {
  const [products, setproducts] = useState([]);
  const [users, setusers] = useState([]);
  const userid = localStorage.getItem("paricollectionuserId");
  const nav = useNavigate();
  const location = useLocation();
  const [price,setprice]=useState()
  const frameDiv12Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

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
        setproducts(data.filter((e)=>(e.userid===userid)))
        const price = data.filter((e)=>(e.userid===userid)).reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price*currentItem.quantity;
      }, 0);
      setprice(price)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
}


const fetchData1 = async () => {
  try {
      const response = await fetch(
        "https://ecommercebackend-32ve.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setusers(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
}

useEffect(() => {
  fetchData();
  fetchData1();
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
      <div className="w-full  bg-white overflow-hidden text-left text-base text-white font-inter m-5">
      
      <div className="flex md:items-center md:justify-center mb-4">
      <div className=" rounded-11xl bg-salmon-100 p-3 flex flex-row items-center justify-center md:py-2.5 md:px-8">
        <div className=" font-semibold text-xs md:text-xl">MY BAG</div>
      </div>
      <img
        className=" max-h-full md:w-40 w-10"
        alt=""
        src="/vector-14.svg"
      />
      <div className=" rounded-11xl flex flex-row items-center justify-center md:py-2.5 md:px-8 text-black border-[1.5px] border-solid border-black">
        <div className=" font-semibold text-xs md:text-xl">ADDRESS</div>
      </div>
      <img
        className="max-h-full md:w-40 w-10"
        alt=""
        src="/vector-14.svg"
        />
      <div className=" rounded-11xl flex flex-row items-center justify-center md:py-2.5 md:px-8 text-black border-[1.5px] border-solid border-black">
        <div className=" font-semibold text-xs md:text-xl">PAYMENT</div>
      </div>
        </div>
      

      <div className="flex flex-col xl:flex-row lg:justify-between m-5  ">

      <div className='  flex flex-col gap-8 ' >
      <div className="box-border md:w-[459px]   overflow-hidden text-left text-lg text-darkslategray-100 font-inter border-[1px] border-solid border-darkgray-400">
{
                    users.filter((e) => (e._id == userid)).map(products => (
      <div className=" rounded-10xs bg-white box-border  overflow-hidden text-darkslategray-800 border-[1px] border-solid border-darkgray-600 p-2">
        <div className="font-semibold">
        {products.fname} {products.lname}
        </div>
        <div className=" text-xl font-semibold">
          Address
        </div>
        <div className="">{products.houseno}</div>
        <div className="">{products.street}</div>
        <div className="">{products.defaultaddress}</div>
        <div className="">
          <span>{`Mobile: `}</span>
          <span className="font-semibold">{products.phone}</span>
        </div>
      </div>
                    ))}
          </div>
     
                    </div>

       <div className=" flex flex-col mt-4 md:mr-20 space-y-6">
       <div className=" rounded-md bg-salmon-100 md:w-[459px] w-72 flex flex-row items-center justify-center md:py-2.5  text-5xl font-made-tommy cursor-pointer" onClick={()=>{
          nav('/payment-page', { state: { id: location.state.id} });
      }}>
        <b className="relative text-center">CONTINUE TO PAYMENT</b>
      </div>
      <div className=" text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div
      className=" box-border md:w-[459px]   overflow-hidden text-left text-lg text-darkslategray-100 font-inter border-[1px] border-solid border-darkgray-400"
      >
             <div className=" text-black flex items-center justify-between">
              <div>
        <span>Cart Total </span>
        <span className="text-base">(Excl. of all taxes)</span>
              </div>
              <div className=" text-base">₹ {price+100}</div>
      </div>
      <img
        className=" max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
        />
          <div className=" text-salmon-100 flex items-center  justify-between">
            <p>
        Discount
            </p>
            <div className=" text-base text-salmon-100">
        -₹100
      </div>
      </div>
      <img
        className=" max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
        />
    
      <div className=" text-black flex items-center justify-between">
        <p>
        Shipping Charges
        </p>
        <div className=" text-base">₹0</div>
      </div>
      <img
        className=" max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg" />
      <div className=" font-semibold flex items-center justify-between">
        <p>
        TOTAL AMOUNT
        </p>
      <b className=" text-base">₹ {price}</b>
      </div>
      </div>
      <div className=" rounded-md bg-salmon-100 md:w-[459px] w-72  flex flex-row items-center justify-center md:py-2.5  text-5xl font-made-tommy cursor-pointer" onClick={()=>{
          nav('/payment-page', { state: { id: location.state.id} });
      }}>
        <b className="relative text-center">CONTINUE TO PAYMENT</b>
      </div>
        </div>
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

export default CARTPAGE1;
