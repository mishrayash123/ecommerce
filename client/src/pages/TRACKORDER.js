import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent2 from "../components/FrameComponent1q";
import FrameComponent from "../components/FrameComponentq";
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
    <div className="w-full relative bg-white h-[2295px] overflow-hidden text-left text-lg text-black font-inter">
                                          <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <FrameComponent5 />
      <FrameComponent1
        frame10="/frame-10.svg"
        frame11="/frame-11.svg"
        frame12="/frame-12.svg"
        frame14="/frame-14.svg"
        propTop="unset"
        propBottom="0px"
        propBackgroundColor="#ff6868"
        propBackgroundColor1="#ebebeb"
        propBackgroundColor2="#ff6868"
      />
      <div className="absolute top-[176px] left-[20px] bg-gainsboro-100 w-[313px] h-[79px] overflow-hidden text-center text-sm">
        <div className="absolute top-[22px] left-[22px] font-semibold">
          Email
        </div>
        <div className="absolute top-[42px] left-[22px] text-xs text-dimgray-300 text-left">
          {email}
        </div>
      </div>
      <div className="absolute top-[176px] left-[596px] font-made-tommy text-darkslategray-100">
        TRACKING ORDER
      </div>
      <div className="absolute top-[318px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden text-mini font-made-tommy border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light" style={{ fontFamily: 'Roboto', fontWeight:"bold" }}>
          Profile
        </div>
      </div>
      <div className="absolute top-[357px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer" onClick={()=>{
        nav('/frame-80');
      }}>
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light text-sm">
          Edit Address
        </div>
      </div>
      {/* <div className="absolute top-[357px] left-[20px] bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden text-mini font-made-tommy border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px]">
          Track Order
        </div>
      </div> */}
      <div className="absolute top-[396px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden text-mini font-made-tommy border-[1px] border-solid border-silver-300 cursor-pointer"  onClick={()=>{
        nav('/wishlist-page');
      }}>
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          Your Orders
        </div>
      </div>
         {/*+ Logout Button */}
         <div className="absolute top-[480px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }} onClick={logout}>
          Logout
        </button>
      </div>
    
      <div className="absolute top-[237px] left-[496px] bg-white box-border w-[962px] h-[199px] overflow-hidden text-left text-xl text-gray-300 font-made-tommy border-[1px] border-solid border-silver-300">
      {
          orderdata.filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
            <>
            {
              orders.ordered ? <img
              className="absolute top-[calc(50%_+_3px)] left-[106px] max-h-full w-[250px]"
              alt=""
              src="/vector-65q.svg"
            />:
            <img
            className="absolute top-[calc(50%_+_3.5px)] left-[106px] max-h-full w-[250px]"
            alt=""
            src="/vector-67q.svg"
          />
            }
            {
              orders.shipped ? <img
              className="absolute top-[calc(50%_+_3px)]  left-[calc(50%_-_125px)]  max-h-full w-[250px]"
              alt=""
              src="/vector-65q.svg"
            />:
            <img
        className="absolute top-[calc(50%_+_3px)] left-[calc(50%_-_125px)] max-h-full w-[250px]"
        alt=""
        src="/vector-67q.svg"
      />
            }
            {/* delivered */}
            {
              orders.ontheway ? <img
              className="absolute top-[calc(50%_+_3px)] left-[607px] max-h-full w-[250px]"
              alt=""
              src="/vector-65q.svg"
            />:
            <img
            className="absolute top-[calc(50%_+_3.5px)] left-[607px] max-h-full w-[250px]"
            alt=""
            src="/vector-67q.svg"
          />
            }
            </>
          ))}
      <div className="absolute top-[141px] left-[67px] font-medium">
        Ordered
      </div>
      <div className="absolute top-[141px] left-[317px] font-medium">
        Shipped
      </div>
      <div className="absolute top-[141px] left-[552px] font-medium">
        On the Way
      </div>
      <div className="absolute top-[141px] left-[812px] font-medium">
        Delivered
      </div>
      {
          orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
      <div className="absolute top-[40px] left-[86px] text-smi font-medium text-darkslategray-100">
        {orders.date}
      </div>
          ))}
          {
          orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
      <div className="absolute top-[40px] left-[336px] text-smi font-medium text-darkslategray-100">
        {orders.date}
      </div>
          ))}
      {
        orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
      <div className="absolute top-[40px] left-[586px] text-smi font-medium text-darkslategray-100">
        {orders.date}
      </div>
        ))}
      {
        orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
      <div className="absolute top-[40px] left-[817px] text-smi font-medium text-darkslategray-100 text-center">
        <p className="m-0">Expected by,</p>
        <p className="m-0">{orders.date}</p>
      </div>
        ))}
    </div>
      <div className="absolute top-[1100px] left-[calc(50%_-_468px)] box-border w-[962px] h-[244px] overflow-hidden text-darkslategray-100 border-[1px] border-solid border-darkgray-600">
        <img
          className="absolute top-[124px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <img
          className="absolute top-[184px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <div className="absolute top-[82px] left-[23px] text-salmon">
          Discount
        </div>
        <div className="absolute top-[142px] left-[23px] text-black">
          Shipping Charges
        </div>
        <div className="absolute top-[202px] left-[23px] font-semibold">
          TOTAL AMOUNT
        </div>
        
        <b className="absolute top-[205px] left-[886px] text-base">₹ {price}</b>
        <div className="absolute top-[145px] left-[908px] text-base">₹0</div>
        <img
          className="absolute top-[64px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <div className="absolute top-[85px] left-[883px] text-base text-salmon">
          -₹100
        </div>
        <div className="absolute top-[30px] left-[888px] text-base">₹ {price+100}</div>
        <div className="absolute top-[22px] left-[23px] text-black">
          <span>Cart Total </span>
          <span className="text-base">(Excl. of all taxes)</span>
        </div>
      </div>
      <div className="absolute top-[523px] left-[496px] flex flex-col gap-8">
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
        className=" w-[244px] h-[325px] object-cover"
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
          <input type="Number" id="productPrice" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[100px] text-xl" placeholder="Enter Product Price"
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

      <div className="absolute top-[1050px] left-[596px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div className="absolute top-[1378px] left-[596px] text-xl text-gray-400">
        DELIVERY
      </div>
      {
                    users.filter((e) => (e._id == userid)).map(products => (
      <div className="absolute top-[1426px] left-[296px] rounded-10xs bg-white box-border w-[962px] h-[202px] overflow-hidden text-darkslategray-800 border-[1px] border-solid border-darkgray-600">
        <div className="absolute top-[56px] left-[22px] font-semibold">
        {products.fname} {products.lname}
        </div>
        <div className="absolute top-[16px] left-[22px] text-xl font-semibold">
          Address
        </div>
        <div className="absolute top-[83px] left-[22px]">{products.houseno}</div>
        <div className="absolute top-[110px] left-[22px]">{products.street}</div>
        <div className="absolute top-[137px] left-[22px]">{products.defaultaddress}</div>
        <div className="absolute top-[164px] left-[22px]">
          <span>{`Mobile: `}</span>
          <span className="font-semibold">{products.phone}</span>
        </div>
      </div>
                    ))}
    </div>
  );
};

export default TRACKORDER;
