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
  const [products, setproducts] = useState([]);
  const location = useLocation();
  const [orderdata,setorderdata] = useState([])
  const userid = localStorage.getItem("paricollectionuserId");
  const {logout} = useAuth();
  const [users, setusers] = useState([]);
  const nav = useNavigate();

  const fetchData2 = async () => {
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
    fetchData2();
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
          orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
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

      {
                    products.filter((e) => (e._id == location.state.id)).map(products => (
      <div className="absolute top-[953px] left-[calc(50%_-_468px)] box-border w-[962px] h-[244px] overflow-hidden text-darkslategray-100 border-[1px] border-solid border-darkgray-600">
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
        {
          orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
        <b className="absolute top-[205px] left-[886px] text-base">₹ {orders.quantity*products.price}</b>
          ))}
        <div className="absolute top-[145px] left-[908px] text-base">₹0</div>
        <img
          className="absolute top-[64px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <div className="absolute top-[85px] left-[883px] text-base text-salmon">
          -₹100
        </div>
        {
          orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
        <div className="absolute top-[30px] left-[888px] text-base">₹ {orders.quantity*products.price+100}</div>
          ))}
        <div className="absolute top-[22px] left-[23px] text-black">
          <span>Cart Total </span>
          <span className="text-base">(Excl. of all taxes)</span>
        </div>
      </div>
                    ))}
    
    {
                    products.filter((e) => (e._id == location.state.id)).map(products => (
    <div className="absolute top-[523px] left-[496px] box-border w-[962px] h-[318px] overflow-hidden text-left text-base text-gray-500 font-inter border-[1px] border-solid border-darkgray-600">
      <img
        className="absolute top-[43px] left-[27px] w-[174px] h-[232px] object-cover"
        alt=""
        src={products.image1}
      />
      <b className="absolute top-[47px] left-[221px] text-black">
      {products.title}
      </b>
      <div className="absolute top-[75px] left-[221px] text-mini text-darkslategray-300">
      {products.category}
      </div>
      {/* <div className="absolute top-[235px] left-[221px] text-mini text-gray-700">
        <span>
          <span>Estimated Delivery by</span>
          <span className="text-darkslategray-300"> </span>
        </span>
        <span className="text-darkslategray-300">
          <b>30 Apr</b>
        </span>
      </div> */}
      <b className="absolute top-[47px] left-[890px] text-darkslategray-300">
        ₹ {products.price+100}
      </b>
      <b className="absolute top-[47px] left-[830px] text-gray-600">₹ {products.price}</b>
      <div className="absolute top-[104px] left-[872px] text-smi text-red">
        ₹100 OFF
      </div>
      <img
        className="absolute top-[51.7px] left-[889.1px] w-[41.9px] h-[9.7px] object-contain"
        alt=""
        src="/vector-17q.svg"
      />
      <div className="absolute top-[75px] left-[782px] text-mini font-semibold">
        MRP incl. of all taxes
      </div>
      <div className="absolute top-[185px] left-[221px] rounded-lg box-border w-[114px] h-[35px] flex flex-row items-center justify-center py-2.5 px-[21px] gap-[10px] text-xs border-[1px] border-solid border-darkgray-900">
        <img
          className="w-2.5 absolute !m-[0] top-[calc(50%_-_1.5px)] left-[91px] h-[5px] z-[0]"
          alt=""
          src="/vector-14q.svg"
        />
        <div className="w-[42px] absolute !m-[0] top-[10px] left-[10px] font-semibold inline-block z-[1]">
          Size: {products.size}
        </div>
      </div>
      <div className="absolute top-[185px] left-[345px] rounded-lg box-border w-[114px] h-[35px] flex flex-row items-center justify-center py-2.5 px-[21px] gap-[10px] text-xs border-[1px] border-solid border-darkgray-900">
        <img
          className="w-2.5 absolute !m-[0] top-[calc(50%_-_2.5px)] left-[91px] h-[5px] z-[0]"
          alt=""
          src="/vector-14q.svg"
        />
        {
          orderdata.filter((e) => (e.userid === userid)).filter((e) => (e.orderid === location.state.orderid)).map(orders =>(
        <div className="w-[34px] absolute !m-[0] top-[10px] left-[10px] font-semibold inline-block z-[1]">
          Qut: {orders.quantity}
        </div>
          ))}
      </div>
    </div>
                    ))}


      <div className="absolute top-[918px] left-[596px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div className="absolute top-[1278px] left-[596px] text-xl text-gray-400">
        DELIVERY
      </div>
      {
                    users.filter((e) => (e._id == userid)).map(products => (
      <div className="absolute top-[1326px] left-[296px] rounded-10xs bg-white box-border w-[962px] h-[202px] overflow-hidden text-darkslategray-800 border-[1px] border-solid border-darkgray-600">
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
