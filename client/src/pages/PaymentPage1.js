import { useState, useCallback } from "react";
import Frame from "../components/Frameq";
import PortalPopup from "../components/PortalPopupq";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import { useLocation } from 'react-router-dom'
import {useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const PaymentPage1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const userid = localStorage.getItem("paricollectionuserId");
  const [orders, setorders] = useState([]);
  const [products, setproducts] = useState([]);
  const nav = useNavigate();
  const [price,setprice]=useState()
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
  }, []);


  const placeorder =async(idx,ordered)=>{
    try {
      const response = await fetch(`https://ecommercebackend-32ve.onrender.com/updateorder/${idx}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ordered}),
      });

      if (response.ok) {
        alert("Congratulations your order placed");
        removecart();
        nav('/')
      }else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

  }

  const  removecart =async ()=>{
    try {
      const response = await fetch(
        `https://ecommercebackend-32ve.onrender.com/deleteCart`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

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
        placeorder(orderidx,true);
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
    <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
       <div className="w-full  bg-white overflow-hidden text-left text-base text-white font-inter m-5 my-16">
      
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
        <div className="my-16">
                         {
                    orders.filter((e) => (e.userid ==userid)).filter((e) => (e.orderid ==location.state.id)).map(orders => (
      <div className="w-1/2 mx-auto rounded-11xl bg-blue-700 flex flex-row items-center justify-center py-2.5 px-8 cursor-pointer" onClick={()=>{
        razorPay(price,orders._id);
      }}>
        <div className="relative font-semibold">Continue To Payment</div>
      </div>
      ))}
      </div>
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
    </>
  );
};

export default PaymentPage1;
