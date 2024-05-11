import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import DiscountFormContainer from "../components/DiscountFormContainer";
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
  const frameDiv12Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const fetchData = async () => {
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

useEffect(() => {
  fetchData();
  fetchData1();
}, []);

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
      <div className="absolute top-[161px] left-[826px] rounded-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-8">
        <div className="relative font-semibold">ADDRESS</div>
      </div>
      <div className="absolute top-[161px] left-[1100px] rounded-11xl flex flex-row items-center justify-center py-2.5 px-8 text-black border-[1.5px] border-solid border-black">
        <div className="relative font-semibold">PAYMENT</div>
      </div>
      <img
        className="absolute top-[180.5px] left-[704.5px] max-h-full w-[109px]"
        alt=""
        src="/vector-142.svg"
      />
      <img
        className="absolute top-[180.5px] left-[979.5px] max-h-full w-[109px]"
        alt=""
        src="/vector-14.svg"
      />
      {
                    users.filter((e) => (e._id == userid)).map(products => (
      <div className="absolute top-[371px] left-[87px] rounded-10xs bg-whitesmoke-300 box-border w-[430px] h-[302px] overflow-hidden text-left text-lg text-black font-inter border-[1px] border-solid border-darkgray-600">
      <div className="absolute top-[26px] left-[22px] font-semibold">
        {products.fname} {products.lname}
      </div>
      <div className="absolute top-[50px] left-[22px]">{products.houseno}</div>
      <div className="absolute top-[73px] left-[22px]">{products.landmark}</div>
      <div className="absolute top-[95px] left-[22px]">{products.street}</div>
      <div className="absolute top-[140px] left-[22px]">{products.defaultaddress}</div>
      <div className="absolute top-[190px] left-[22px]">
        <span>{`Mobile: `}</span>
        <span className="font-semibold">{products.phone}</span>
      </div>
      <div className="absolute top-[19px] left-[382px] rounded-2xs box-border w-5 h-5 overflow-hidden border-[2px] border-solid border-salmon">
        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-2xs bg-salmon w-3 h-3" />
      </div>
    </div>
                    ))}
      {/* <div className="absolute top-[371px] left-[87px] rounded-10xs box-border w-[573px] h-[357px] overflow-hidden text-mini text-darkslategray-400 border-[1px] border-solid border-darkgray-400">
        <img
          className="absolute top-[calc(50%_-_87.5px)] left-[calc(50%_-_67.5px)] w-[135px] h-[135px] overflow-hidden object-cover"
          alt=""
          src="/iconparksolidadd@2x.png"
        />
        <div className="absolute top-[240px] left-[calc(50%_-_72.5px)] font-medium">
          ADD NEW ADDRESS
        </div>
      </div> */}
      <div className="absolute top-[309px] left-[1050px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      {/* <div className="absolute top-[309px] left-[87px] text-xl font-semibold text-darkslategray-500">
        Delivery To
      </div> */}
      <div className="absolute top-[668px] left-[1050px] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[127.5px] text-5xl font-made-tommy cursor-pointer" onClick={()=>{
         nav('/payment-page', { state: { id: location.state.id, productid:location.state.productid,quantity:location.state.quantity} });
      }}>
        <b className="relative">CONTINUE TO PAYMENT</b>
      </div>
      {
                    products.filter((e) => (e._id == location.state.productid)).map(products => (
                      <div
                      className="absolute top-[400px] left-[1050px] box-border w-[459px] h-[244px] overflow-hidden text-left text-lg text-darkslategray-100 font-inter border-[1px] border-solid border-darkgray-400"
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
                      <b className="absolute top-[205px] left-[363px] text-base">₹ {location.state.quantity*products.price}</b>
                      <div className="absolute top-[145px] left-[384px] text-base">₹0</div>
                      <img
                        className="absolute top-[63.5px] left-[0.5px] max-h-full w-[528px]"
                        alt=""
                        src="/vector-20.svg"
                      />
                      <div className="absolute top-[85px] left-[360px] text-base text-salmon-100">
                        -₹100
                      </div>
                      <div className="absolute top-[30px] left-[365px] text-base">₹ {location.state.quantity*products.price+100}</div>
                      <div className="absolute top-[22px] left-[23px] text-black">
                        <span>Cart Total </span>
                        <span className="text-base">(Excl. of all taxes)</span>
                      </div>
                    </div>
                    ))}
    </div>
  );
};

export default CARTPAGE1;
