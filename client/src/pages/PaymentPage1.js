import { useState, useCallback } from "react";
import Frame from "../components/Frameq";
import PortalPopup from "../components/PortalPopupq";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent3 from "../components/FrameComponent3q";
import FrameComponent2 from "../components/FrameComponent2q";
import Component from "../components/Componentq";
import { useLocation } from 'react-router-dom'
import {useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const PaymentPage1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [ordered, setordered] = useState(false);
  const userid = localStorage.getItem("paricollectionuserId");
  const [orders, setorders] = useState([]);
  const [products, setproducts] = useState([]);
  const nav = useNavigate();
  const location = useLocation();
  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);


  const fetchData1 = async () => {
    try {
        const response = await fetch(
          "http://localhost:8080/getorders",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setorders(data)
        } else {
          alert("Something went wrong please login again");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
  }
  
  useEffect(() => {
    fetchData1();
   fetchData();
   console.log(location.state.id)
  }, []);


  const placeorder =async(idx)=>{
    try {
      const response = await fetch(`http://localhost:8080/updateorder/${idx}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ordered}),
      });

      if (response.ok) {
        alert("Congratulations your order placed");
        nav('/')
      }else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

  }

  const fetchData = async () => {
    try {
        const response = await fetch(
          "http://localhost:8080/getproducts",
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

  const loadScript = (src) => {
    return new Promise( (resovle) => {
    const script = document. createElement('script');
    script.src = src;
    script.onload = () => {
    resovle(true)
    }
    script.onerror = () => {
    resovle (false)
    }
    document.body.appendChild(script)
    });
}

  const razorPay = async (amountx,orderidx) =>{
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
     if (!res) {
        alert('You are offline... Failed to load Razorpay SDK');
        return;
     }
    
     const options = {
        key:"rzp_test_dTl39yx1h7zSnl",
        currency:"INR",
        amount:amountx*100,
        name: "Pari Collection", 
        description: "Ordering 1 thumbnail", 
        image: 'xyz',

        handler: function (response) {
        alert ("Payment Successfully");
        setordered(true)
        placeorder(orderidx);
        }, 
        prefill: {
        name:
        "Pari Collection"
        }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open()
 }


  return (
    <>
      <div className="w-full relative bg-white h-[1776px] overflow-hidden text-left text-base text-white font-inter">
      <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
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
        <div className="absolute top-[161px] left-[564px] rounded-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-8">
        <div className="relative font-semibold">MY BAG</div>
      </div>
      <div className="absolute top-[161px] left-[826px] rounded-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-8">
        <div className="relative font-semibold">ADDRESS</div>
      </div>
      <div className="absolute top-[161px] left-[1100px] rounded-11xl flex flex-row items-center justify-center py-2.5 px-8 border-[1.5px] border-solid bg-salmon-100">
        <div className="relative font-semibold">PAYMENT</div>
      </div>
      {
                    products.filter((e) => (e._id == location.state.productid)).map(products => (
                      <div>
                         {
                    orders.filter((e) => (e.userid ==userid)).filter((e) => (e.orderid ==location.state.id)).map(orders => (
      <div className="absolute top-[261px] left-[726px] rounded-11xl bg-blue-700 flex flex-row items-center justify-center py-2.5 px-8 cursor-pointer" onClick={()=>{
        razorPay(products.price*location.state.quantity,orders._id);
      }}>
        <div className="relative font-semibold">Continue To Payment</div>
      </div>
      ))}
      </div>
                    ))}
        <img
          className="absolute top-[180.5px] left-[704.5px] max-h-full w-[109px]"
          alt=""
          src="/vector-141q.svg"
        />
        <img
          className="absolute top-[180.5px] left-[979.5px] max-h-full w-[109px]"
          alt=""
          src="/vector-141q.svg"
        />
        {/* <div className="absolute top-[309px] left-[1115px] text-xl text-gray-400">
          BILLING DETAILS
        </div> */}
        <div
          className="absolute top-[668px] left-[1115px] rounded-md bg-salmon flex flex-row items-center justify-center py-2.5 px-[127.5px] cursor-pointer text-5xl font-made-tommy"
          onClick={openFrame}
        >
          <b className="relative">CONTINUE TO PAYMENT</b>
        </div>
        {/* <FrameComponent3 /> */}
        {/* <FrameComponent2 /> */}
        {/* <div className="absolute top-[448px] left-[87px] text-xl font-semibold text-salmon">
          Payment Options
        </div> */}
        {/* <Component propTop="531px" propLeft="100px" /> */}
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default PaymentPage1;
