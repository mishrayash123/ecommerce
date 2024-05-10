import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent14 from "../components/FrameComponent14";
import DiscountFormContainer from "../components/DiscountFormContainer";
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useMemo } from "react";

const CARTPAGE = ({ propTop }) => {
  const location = useLocation();
  const [products, setproducts] = useState([]);
  const [size, setsize] = useState("x");
  const [productid, setproductid] = useState(location.state.id);
  const [quantity, setquantity] = useState(1);
  const [date, setDate] = useState(new Date().toDateString());
  const userid = localStorage.getItem("paricollectionuserId");
  const [orderid,setorderid]=useState(parseInt(Math.random()*10000))
  const nav = useNavigate();

  const frameDiv12Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

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

useEffect(() => {
  fetchData();
}, []);

const handlesubmit = async()=>{
  try {
    const response = await fetch("http://localhost:8080/addtoorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({productid,
        userid,
        date,
        size,
        orderid,
        quantity,
      }),
    });

    if (response.ok) {
      alert("Succesfully step-1 done");
      nav('/cart-page1', { state: { id: orderid, productid:productid,quantity:quantity} });
    }else {
      alert("something went wrong...please check credential");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
}



  return (
    <div className="w-full relative bg-white h-[1625px] overflow-hidden text-left text-base text-white font-inter">
                  <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <FrameComponent1
        frame10="/frame-10.svg"
        frame11="/frame-11.svg"
        frame12="/frame-123.svg"
        frame14="/frame-143.svg"
        propTop="unset"
        propBottom="0px"
        propBackgroundColor="#ff6868"
        propBackgroundColor1="#ebebeb"
        propBackgroundColor2="#ff6868"
      />
      <div className="absolute top-[161px] left-[564px] rounded-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-8">
        <div className="relative font-semibold">MY BAG</div>
      </div>
      <div className="absolute top-[161px] left-[826px] rounded-11xl flex flex-row items-center justify-center py-2.5 px-8 text-black border-[1.5px] border-solid border-black">
        <div className="relative font-semibold">ADDRESS</div>
      </div>
      <div className="absolute top-[161px] left-[1100px] rounded-11xl flex flex-row items-center justify-center py-2.5 px-8 text-black border-[1.5px] border-solid border-black">
        <div className="relative font-semibold">PAYMENT</div>
      </div>
      <img
        className="absolute top-[180.5px] left-[704.5px] max-h-full w-[109px]"
        alt=""
        src="/vector-14.svg"
      />
      <img
        className="absolute top-[180.5px] left-[979.5px] max-h-full w-[109px]"
        alt=""
        src="/vector-14.svg"
      />
      
      {
                    products.filter((e) => (e._id == location.state.id)).map(products => (
      <div className="absolute top-[311px] left-[20px] box-border w-[946px] h-[507px] overflow-hidden text-left text-base text-darkslategray-200 font-inter border-[1px] border-solid border-darkgray-400">
      <img
        className="absolute top-[97px] left-[25px] w-[244px] h-[325px] object-cover"
        alt=""
        src={products.image1}
      />
      <img
        className="absolute top-[69.5px] left-[0.5px] max-h-full w-[1001px]"
        alt=""
        src="/vector-16.svg"
      />
      <div className="absolute top-[27px] left-[27px] text-sm">
        Please select address
      </div>
      <b className="absolute top-[107px] left-[302px] text-black">
        {products.title}
      </b>
      <div className="absolute top-[137px] left-[302px] text-mini">
        {products.category}
      </div>
      {/* <div className="absolute top-[257px] left-[302px] text-mini text-gray-1000">
        <span>
          <span>Estimated Delivery by</span>
          <span className="text-darkslategray-200"> </span>
        </span>
        <span className="text-darkslategray-200">
          <b>30 Apr</b>
        </span>
      </div> */}
      <b className="absolute top-[24px] left-[867px] text-xl [text-decoration:underline] text-salmon-100">
        ADD
      </b>
      <b className="absolute top-[107px] left-[871px]">{products.price+100}</b>
      <b className="absolute top-[107px] left-[811px] text-gray-800">{products.price}</b>
      <div className="absolute top-[166px] left-[853px] text-smi text-red">
        ₹100 OFF
      </div>
      <img
        className="absolute top-[111.7px] left-[870.1px] w-[41.9px] h-[9.7px] object-contain"
        alt=""
        src="/vector-17.svg"
      />
      <div className="absolute top-[137px] left-[763px] text-mini font-semibold text-gray-600">
        MRP incl. of all taxes
      </div>
      {/* <div className="absolute top-[447px] left-[475px] rounded-8xs flex flex-row items-center justify-center py-2.5 px-[55px] text-smi text-gray-100 border-[1px] border-solid border-gray-100">
        <div className="relative font-semibold">REMOVE</div>
      </div>
      <div className="absolute top-[447px] left-[675px] rounded-8xs flex flex-row items-center justify-center py-2.5 px-[55px] text-smi text-gray-100 border-[1px] border-solid border-gray-100">
        <div className="relative font-semibold">MOVE TO WISHLIST</div>
      </div> */}
      <div className="absolute top-[207px] left-[302px] rounded-lg box-border w-[114px] h-[35px] flex flex-col items-center justify-center py-2.5 px-[21px] gap-[10px]">
      <label htmlFor="availableSize" className="text-black text-base font-bold ">Size</label>
          <select id="availableSize" className="border border-solid border-darkgray-300 px-3 py-2 rounded text-xl" onChange={(e) => setsize(e.target.value)}>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </select>
      </div>
      <div className="absolute top-[207px] left-[426px] rounded-lg box-border w-[114px] h-[35px] flex flex-col items-center justify-center py-2.5 px-[21px] gap-[10px]">
      <label htmlFor="productPrice" className="text-black text-base font-bold ">Quantity</label>
          <input type="Number" id="productPrice" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[100px] text-xl" placeholder="Enter Product Price"  onChange={(e) => setquantity(e.target.value)}
          value={quantity}/>
      </div>
      <img
        className="absolute top-[422px] left-[302px] max-h-full w-[610px]"
        alt=""
        src="/vector-18.svg"
      />
    </div>
                    ))}

      <div className="absolute top-[389px] left-[1050px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div className="absolute top-[311px] left-[1050px] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[186px] text-5xl font-made-tommy cursor-pointer" onClick={()=>{
        handlesubmit();
      }}>
        <b className="relative">PLACE ORDER</b>
      </div>
      <div className="absolute top-[768px] left-[1050px] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[186px] text-5xl font-made-tommy cursor-pointer" onClick={()=>{
        handlesubmit();
      }}>
        <b className="relative">PLACE ORDER</b>
      </div>
      
      {
                    products.filter((e) => (e._id == location.state.id)).map(products => (

      <div
      className="absolute top-[451px] left-[1050px] box-border w-[459px] h-[244px] overflow-hidden text-left text-lg text-darkslategray-100 font-inter border-[1px] border-solid border-darkgray-400"
      style={frameDiv12Style}
    >
      <img
        className="absolute top-[123.5px] left-[0.5px] max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
      />
      <img
        className="absolute top-[183.5px] left-[0.5px] max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
      />
      <div className="absolute top-[82px] left-[23px] text-salmon-100">
        Discount
      </div>
      <div className="absolute top-[142px] left-[23px] text-black">
        Shipping Charges
      </div>
      <div className="absolute top-[202px] left-[23px] font-semibold">
        TOTAL AMOUNT
      </div>
      <b className="absolute top-[205px] left-[363px] text-base">₹ {quantity*products.price}</b>
      <div className="absolute top-[145px] left-[384px] text-base">₹0</div>
      <img
        className="absolute top-[63.5px] left-[0.5px] max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
      />
      <div className="absolute top-[85px] left-[360px] text-base text-salmon-100">
        -₹100
      </div>
      <div className="absolute top-[30px] left-[365px] text-base">₹ {quantity*products.price+100}</div>
      <div className="absolute top-[22px] left-[23px] text-black">
        <span>Cart Total </span>
        <span className="text-base">(Excl. of all taxes)</span>
      </div>
    </div>

                    ))}
    </div>
  );
};

export default CARTPAGE;
