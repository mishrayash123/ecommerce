import MainHeader from "../components/MainHeader";
import ListboxComponent from "../components/ListboxComponent";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent8 from "../components/FrameComponent8";
import GroupComponent8 from "../components/GroupComponent8";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent5 from "../components/GroupComponent5";
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const ThermalWOMEN = () => {
  const [products, setproducts] = useState([]);
  const nav = useNavigate();


  

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
    <div className="w-full relative bg-white h-[2873px] overflow-hidden text-left text-base text-dimgray-300 font-poppins">
      <img
        className="absolute top-[89px] left-[-2px] w-[2295px] h-[588px] object-cover"
        alt=""
        src="/image-29@2x.png"
      />
       <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <div className="absolute top-[89px] left-[1301px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-11xl bg-salmon-100 flex flex-row items-start justify-start gap-[10px] text-9xl text-white font-made-tommy">
        <div className="rounded-t-none rounded-br-none rounded-bl-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">MEN</div>
        </div>
        <div className="bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">WOMEN</div>
        </div>
        <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">KIDS</div>
        </div>
      </div>
      <div className="absolute top-[700px] left-[calc(50%_-_95px)] rounded-2xl bg-darkgray-900 h-[23px] flex flex-row items-start justify-start pt-1.5 px-3 pb-[7px] box-border gap-[28px]">
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
        <div className="w-[15px] relative rounded-[50%] box-border h-[15px] border-[3px] border-solid border-gray-900" />
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
      </div>
      <ListboxComponent
        chevron="/chevron.svg"
        propTop="816px"
        propLeft="1333px"
        propHeight="1px"
        propOpacity="0"
        propBackgroundColor="unset"
        propBackgroundColor1="#fff"
        propBackgroundColor2="#fff"
        propBackgroundColor3="#fff"
      />
      <div className="absolute top-[833px] left-[500px] text-xl text-black">
        Women T-Shirt
      </div>
      <div className="absolute top-[835px] left-[684px] rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-darkgray-100">
        <div className="relative">Women Base Layer</div>
        <img
          className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/phx.svg"
        />
      </div>
      <FrameComponent9
        activewear="Activewear"
        menBaseLayer="Women Base Layer"
        menActivewear="Women Activewear"
        frame39="/frame-39.svg"
        showFrameDiv
      />
      <FrameComponent4 propTop="1626px" propHeight="371px" />
      <FrameComponent8 showFrameDiv />
      {
          products.filter((e)=>(e.category==="ThermalMEN")).map(products =>(
 <GroupComponent5
        image9={products.image1}
        chinos="POLOS"
        dontCareClub={products.title}
        id={products._id}
        prop={products.price}
        solarbagOutline="/solarbagoutline6.svg"
        propTop="946px"
        propLeft="503px"
        propTop1="-39px"
        propHeight="429px"
        propLeft1="calc(50% - 174px)"
        propWidth="348px"
      /> 
          ))}
      
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
      <div className="absolute top-[778px] left-[490px]">Home / Thermal</div>
    </div>
  );
};

export default ThermalWOMEN;
