import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import { useAuth } from "../AuthContext";
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from "react";

const TRACKORDER = () => {
  const email = localStorage.getItem("email");
  const location = useLocation();
  const [orderdata,setorderdata] = useState([])
  const [orderdata1,setorderdata1] = useState([])
  const [price,setprice]=useState()
  const userid = localStorage.getItem("paricollectionuserId");
  const {logout} = useAuth();
  const [users, setusers] = useState([]);
  const nav = useNavigate();


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

  const fetchData = async () => {
    try {
  const response = await fetch(
    "https://ecommercebackend-32ve.onrender.com/getorders",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    setorderdata(data)
    setorderdata1(data.filter((e)=>(e.orderid === location.state.orderid))[0].products)
    const price = data.filter((e)=>(e.orderid === location.state.orderid))[0].products.reduce((accumulator, currentItem) => {
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
<div className="w-full  bg-white  overflow-hidden text-left text-mini text-black font-made-tommy m-5">
<div className="flex  flex-col lg:flex-row justify-between  m-5 ">
        <div className="space-y-9 flex flex-col  justify-center lg:justify-start items-center md:justify-start">
      <div className=" bg-gainsboro-100 w-[313px]  p-2 text-sm font-inter">
        <div className=" font-semibold">
          Email
        </div>
        <div className=" text-xs text-dimgray-300 text-left">
          {email}
        </div>
      </div>

      <div>
      <div className=" bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="" style={{ fontFamily: 'Roboto', fontWeight:"bold" }}>
          Profile
        </div>
      </div>
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer" onClick={()=>{
        nav('/frame-80');
      }}>
        <div className=" font-light">
          Edit Address
        </div>
      </div>
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer"  onClick={()=>{
        nav('/wishlist-page');
      }}>
        <div className=" font-light">
          Your Orders
        </div>
      </div>
        </div>

      {/* Logout Button */}
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }}
        onClick={logout}
        >
          Logout
        </button>
      </div>
          </div>

<div className='  flex flex-col gap-8 '>
{
          orderdata.filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
<div className="bg-white p-4 rounded-lg shadow-md  max-w-4xl  -ml-8">
      <div className="flex justify-between items-center text-center text-gray-600">
        <div>
          <div className="text-sm">{orders.date}</div>
          {
              orders.ordered ?<div className="mt-2 h-4 w-4 bg-blue-700 rounded-full mx-auto"></div> :<div className="mt-2 h-4 w-4 bg-gray-400 rounded-full mx-auto"></div> }
          <div className="mt-2 text-gray-800 font-semibold">Ordered</div>
        </div>
        <div className="flex-grow border-t-2 border-gray-300 mx-2"></div>
        <div>
          <div className="text-sm">{orders.date}</div>
          {
              orders.shipped ?<div className="mt-2 h-4 w-4 bg-blue-700 rounded-full mx-auto"></div> :<div className="mt-2 h-4 w-4 bg-gray-400 rounded-full mx-auto"></div> }
          <div className="mt-2 text-gray-800 font-semibold">Shipped</div>
        </div>
        <div className="flex-grow border-t-2 border-gray-300 mx-2"></div>
        <div>
          <div className="text-sm">{orders.date}</div>
          {
              orders.ontheway ?<div className="mt-2 h-4 w-4 bg-blue-700 rounded-full mx-auto"></div> :<div className="mt-2 h-4 w-4 bg-gray-400 rounded-full mx-auto"></div> }
          <div className="mt-2 text-gray-800 font-semibold">On the Way</div>
        </div>
        <div className="flex-grow border-t-2 border-gray-300 mx-2"></div>
        <div>
          <div className="text-sm">Expected by,</div>
          <div className="text-sm">{orders.date}</div>
          {
              orders.delivered ?<div className="mt-2 h-4 w-4 bg-blue-700 rounded-full mx-auto"></div> :<div className="mt-2 h-4 w-4 bg-gray-400 rounded-full mx-auto"></div> }
          <div className="mt-2 text-gray-800 font-semibold">Delivered</div>
        </div>
      </div>
    </div>
   )) }
<div className='  flex flex-col gap-8 ' >

      {
                    orderdata1.map(products => (
      <div className="box-border m-2 w-3/4  overflow-hidden text-left text-base text-darkslategray-200 font-inter border-[1px] border-solid border-darkgray-400">
      <div className="flex justify-between ">
        <div></div>
      <b className="m-2 text-xl [text-decoration:underline] text-salmon-100">
        ADD
      </b>
        </div>
        <div className="mx-2 text-sm">
        Please select address
      </div>
        <img
        className=" max-h-full w-[1001px]"
        alt=""
        src="/vector-16.svg"
      />
      <div className="flex justify-between">
        <div></div>
        <div></div>
<div className="flex flex-col"><b className=" text-black">
        {products.title}
      </b>
      <div className=" text-mini">
        {products.category}
      </div></div>
<div className=" m-2"><b className="line-through">{products.quantity*products.price+100}</b>
      <b className=" text-gray-800  mx-2">{products.quantity*products.price}</b>
      <div className=" text-smi text-red">
        ₹100 OFF
      </div>
      <div className=" text-mini font-semibold text-gray-600">
        MRP incl. of all taxes
      </div>
  </div>
</div>
        <div className="flex flex-row gap-4">
        <img
        className=" md:w-[244px] md:h-[325px] w-1/4 object-cover"
        alt=""
        src={products.image1}
      />
      <div className=" rounded-lg box-border w-[114px] h-[35px] flex flex-col items-center justify-center ">
      <label htmlFor="availableSize" className="text-black text-base font-bold ">Size</label>
          <select id="availableSize" className="border border-solid border-darkgray-300 px-3 py-2 rounded text-xl">
            <option selected >{products.size}</option>
          </select>
      </div>
      <div className=" rounded-lg box-border w-[114px] h-[35px] flex flex-col items-center justify-center ">
      <label htmlFor="productPrice" className="text-black text-base font-bold ">Quantity</label>
          <input type="Number" id="productPrice" className="border border-solid border-darkgray-300 px-3 py-2 rounded md:w-[100px] w-10 text-xl" placeholder="Enter Product Price"
          value={products.quantity}/>
      </div>
        </div>
        <img
        className="my-4 max-h-full w-[610px]"
        alt=""
        src="/vector-18.svg"
      />
    </div>
                    ))}
                    </div>
                    <div className="text-start text-xl text-gray-400">
        BILLING DETAILS       </div>

                    <div
      className=" box-border md:w-[459px]   overflow-hidden text-left text-lg text-darkslategray-100 font-inter border-[1px] border-solid border-darkgray-400"
      >

             <div className=" text-black flex items-center justify-between p-2">
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
          <div className=" text-salmon-100 flex items-center  justify-between p-2">
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
    
      <div className=" text-black flex items-center justify-between p-2">
        <p>
        Shipping Charges
        </p>
        <div className=" text-base">₹0</div>
      </div>
      <img
        className=" max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg" />
      <div className=" font-semibold flex items-center justify-between p-2">
        <p>
        TOTAL AMOUNT
        </p>
      <b className=" text-base">₹ {price}</b>
      </div>
      </div>
      <div className="text-start text-xl text-gray-400 my-3">
        Delivery       </div>

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

export default TRACKORDER;
