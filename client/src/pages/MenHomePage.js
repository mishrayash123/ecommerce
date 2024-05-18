import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const MenHomePage = () => {
  const [products, setproducts] = useState([]);
  const nav = useNavigate();


  

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
        console.log(data)
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


  return (
    <div className="w-full relative bg-white h-[5641px] overflow-hidden text-left text-13xl text-white font-made-tommy">
      <FrameComponent />
      <img
        className="absolute top-[714px] left-[0px] w-[1730px] h-[466px] object-cover"
        alt=""
        src="/13662927-5313737-1@2x.png"
      />
      <div className="absolute top-[754px] left-[1467px] bg-burlywood w-[231px] h-[91px]" />
      <div className="absolute top-[1200px] left-[calc(50%_-_108px)] rounded-2xl bg-darkgray-900 h-[29px] flex flex-row items-start justify-start pt-1.5 px-3 pb-[7px] box-border gap-[28px]">
        <div className="w-[15px] relative rounded-[50%] bg-gray-900 h-[15px]" />
        <div className="w-5 relative rounded-[50%] box-border h-5 border-[3px] border-solid border-gray-900" />
        <div className="w-[15px] relative rounded-[50%] bg-gray-900 h-[15px]" />
        <div className="w-[15px] relative rounded-[50%] bg-gray-900 h-[15px]" />
        <div className="w-[15px] relative rounded-[50%] bg-gray-900 h-[15px]" />
      </div>
      <a href="/readymade-tshirt-men-page">
      <div className="absolute top-[1495px] left-[20px] rounded-lgi w-[480px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[480px] h-[480px] object-cover"
          alt=""
          src="/manblacktshirtwithtattoohisarmbackview-114261616-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_151px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          OVERSIZED T-SHIRT
        </b>
      </div>
      </a>
      <a href="/accessories-socks">
      <div className="absolute top-[2575px] left-[20px] rounded-lgi w-[480px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[-220px] left-[0px] w-[480px] h-[720px] object-cover"
          alt=""
          src="/couplewithfeetwallvalentinesday-232148383150-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_53px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          SOCKS
        </b>
      </div>
      </a>
      <a href="/accessories-hanky">
      <div className="absolute top-[2035px] left-[20px] rounded-lgi w-[754px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[754px] h-[503px] object-cover"
          alt=""
          src="/whitehandkerchiefclothassortment-232149091418-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_56px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          HANKY
        </b>
      </div>
      </a>
      <a href="/">
      <div className="absolute top-[2035px] left-[850px] rounded-lgi w-[754px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[4px] w-[650px] h-[499px] object-cover"
          alt=""
          src="/frontviewstacktowelphysiotherapyoffice-232148789867-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_63px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          TOWELS
        </b>
      </div>
      </a>
      <a href="/readymade-lower-page">
      <div className="absolute top-[1495px] left-[calc(50%_-_238px)] rounded-lgi w-[480px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[-193px] left-[0px] w-[480px] h-[718px] object-cover"
          alt=""
          src="/portraitfemalelegsjeans-17133711954-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_55px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          LOWER
        </b>
      </div>
      </a>
      <a href="/accessories-arm-sleeves">
      <div className="absolute top-[2575px] left-[calc(50%_-_238px)] rounded-lgi w-[480px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[calc(50%_-_353px)] w-[722px] h-[480px] object-cover"
          alt=""
          src="/photofrontmodelwithblacksweatshirt-1255402797-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_105px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          ARM SLEEVES
        </b>
      </div>
      </a>
      <a href="/readymade-tshirt-women-page">
      <div className="absolute top-[1495px] left-[calc(50%_+_260px)] rounded-lgi w-[480px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[-185px] left-[0px] w-[480px] h-[720px] object-cover"
          alt=""
          src="/basicgreenshirtmenrsquosfashionapparelstudioshoot-53876101197-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_54px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          SHIRTS
        </b>
      </div>
      </a>
      <a href="/accessories-socks">
      <div className="absolute top-[2575px] left-[calc(50%_+_260px)] rounded-lgi w-[480px] h-[480px] overflow-hidden">
        <img
          className="absolute top-[-36px] left-[calc(50%_-_260px)] w-[516px] h-[516px] object-cover"
          alt=""
          src="/fashionablegirlknittedsocks-1585954133-1@2x.png"
        />
        <b className="absolute top-[376px] left-[calc(50%_-_126px)] [text-shadow:1.8px_0_0_#000,_0_1.8px_0_#000,_-1.8px_0_0_#000,_0_-1.8px_0_#000]">
          STOKING SCOKS
        </b>
      </div>
      </a>
      <b className="absolute top-[1397px] left-[calc(50%_-_106px)] text-21xl text-gray-700">
        CATEGORY
      </b>
      

     <div className="absolute top-[3471px] left-[28px] flex flex-row gap-8">
     {
          products.filter((e)=>(e.category==="Top seller")).map(products =>(
            <a href='' onClick={
              (e) => {
                nav('/material-page', { state: { id: products._id} });
              }
          }>
      <div className="shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] font-inter">
        <div className="relative top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
          <img
            className="relative top-[229px] left-[179px] w-6 h-6 overflow-hidden"
            alt=""
            src="/mingcuteupfill.svg"
          />
          <img
            className="absolute top-[-1px] left-[calc(50%_-_146px)] w-[293px] h-[391px] object-cover"
            alt=""
            src={products.image1}
          />
          
          <div className="absolute top-[449px] left-[15px]">
            {products.title}
          </div>
          <img
            className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
            alt=""
            src="/vector-13.svg"
          />
          <div className="absolute top-[480px] left-[15px] font-semibold">
            ₹{products.price}
          </div>
          <div className="absolute top-[528px] left-[16px] text-2xs">
            MRP incl. of all taxes
          </div>
          <div className="absolute top-[0px] left-[313px] bg-whitesmoke-100 w-[54px] h-[390px]" />
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[54px] h-[390px]" />
        </div>
        {/* <img
          className="relative top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
          alt=""
          src="/solarbagoutline6.svg"
        /> */}
      </div>
      </a>
          ))}
     </div>
      
      <img
        className="absolute top-[3721px] left-[1628px] w-[57px] h-[57px]"
        alt=""
        src="/group-6.svg"
      />
      <img
        className="absolute top-[4431px] left-[1628px] w-[57px] h-[57px]"
        alt=""
        src="/group-6.svg"
      />
      <b className="absolute top-[3357px] left-[calc(50%_-_123px)] text-21xl text-gray-700">
        TOP SELLING
      </b>
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
      <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
    </div>
  );
};

export default MenHomePage;
