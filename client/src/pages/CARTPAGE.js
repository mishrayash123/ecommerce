import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useMemo } from "react";

const CARTPAGE = ({ propTop }) => {
  const location = useLocation();
  const [products, setproducts] = useState([]);
  const [date, setDate] = useState(new Date().toDateString());
  const userid = localStorage.getItem("paricollectionuserId");
  const [orderid,setorderid]=useState(parseInt(Math.random()*10000))
  const [price,setprice]=useState()
  const nav = useNavigate();

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

useEffect(() => {
  fetchData();
}, []);

const handlesubmit = async()=>{
  try {
    const response = await fetch("https://ecommercebackend-32ve.onrender.com/addtoorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid,
        date,
        orderid,
        products
      }),
    });

    if (response.ok) {
      alert("Succesfully step-1 done");
      nav('/cart-page1', { state: { id: orderid} });
    }else {
      alert("something went wrong...please check credential");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
}



  return (
    <div>
      <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
    <div className="w-full  bg-white overflow-hidden text-left text-base text-white font-inter">
      
      <div className="flex md:items-center md:justify-center mb-4 m-5">
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
      

      <div className="flex flex-col xl:flex-row">

      <div className='  flex flex-col gap-8 m-5' >

      {
                    products.filter((e)=>(e.userid===userid)).map(products => (
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

       <div className=" flex flex-col mt-4 md:mr-20 space-y-6 m-5">
       <div className=" rounded-md bg-salmon-100 md:w-[459px] w-72 flex flex-row items-center justify-center md:py-2.5  text-5xl font-made-tommy cursor-pointer" onClick={()=>{
        handlesubmit();
      }}>
        <b className="relative">PLACE ORDER</b>
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
        handlesubmit();
      }}>
        <b className="relative">PLACE ORDER</b>
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

export default CARTPAGE;
