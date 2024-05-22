import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import Component from "../components/Component";
import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";


const WISHLISTPAGE = () => {
  const [orderdata,setorderdata] = useState([])
  const userid = localStorage.getItem("paricollectionuserId");
  const nav = useNavigate();

  const fetchData2 = async () => {
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
    fetchData2()
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
    <div className="w-full relative bg-white  overflow-hidden text-left text-9xl text-black font-inter">
      <div className="absolute top-[147px] left-[calc(50%_-_700px)]">
        <span className="font-semibold">My Orders</span>
        <b> </b>
        <span>({orderdata.filter((e) => (e.userid === userid)).length})</span>
      </div>
      <div className='my-44'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%]  " role="group">
         {
          orderdata.filter((e) => (e.userid === userid)).map(orders =>(
            <a href='' onClick={
              (e) => {
                nav('/trackorder', { state: { id: orders.productid,orderid:orders.orderid} });
              }
          }>

            <div className="cardwid shadow-lg m-2" style={{
    "height":" 250px",
    "width": "100%"
}} placeholder="k">
      <div placeholder="k">
        <div className="mb-3 ">
          <div className="text-sm font-bold text-center" placeholder="k">
           <p className="text-black text-center">Order Id:</p> <span>#{orders.orderid}</span>
          </div>
          <div className="text-sm font-bold text-center" placeholder="k">
           <p className="text-black text-center">Date:</p> <span>{orders.date}</span>
          </div>
          <div className="text-sm font-bold text-center" placeholder="k">
          <p className="text-black text-center">Quantity:</p> <span>{orders.quantity}</span> 
          </div>
          <div className="text-sm font-bold text-center" placeholder="k">
          <p className="text-black text-center">Ordered:</p> {orders.ordered? <span>Ordered</span>: <span>Payment Pending</span>} 
          </div>
        </div>
      </div>
    </div>
    </a>
          ))
         }
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

export default WISHLISTPAGE;
