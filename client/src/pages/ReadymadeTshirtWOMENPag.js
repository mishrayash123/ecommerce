import MainHeader from "../components/MainHeader";
import ListboxComponent from "../components/ListboxComponent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent7 from "../components/GroupComponent7";
import GroupComponent6 from "../components/GroupComponent6";
import GroupComponent5 from "../components/GroupComponent5";
import FrameComponent1 from "../components/FrameComponent1";
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const ReadymadeTshirtWOMENPag = () => {
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
      <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
       <img
        className="absolute top-[89px] left-[-80px] w-[2295px] h-[588px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
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
      <div className="absolute top-[833px] left-[490px] text-xl text-black">
        Women T-Shirt
      </div>
      <div className="absolute top-[835px] left-[684px] rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-darkgray-100">
        <div className="relative">All T-Shirt</div>
        <img
          className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/phx.svg"
        />
      </div>
      <FrameComponent5
        overSizedTShirt="Over Sized T-shirt"
        allTShirt="All T-shirt"
        menFullSleeveTShirts="Women Full Sleeve T-shirts"
        hoodedTShirts="Hooded T-shirts"
        jackets="Jackets"
        dropCutTShirts="Drop Cut T-shirts"
        easyFitFullSleeveTShirt="Easy Fit Full Sleeve T-shirt"
      />
      <FrameComponent4 propTop="1716px" propHeight="371px" />
      <FrameComponent3 />
     
      {
          products.filter((e)=>(e.category==="ReadymadeTshirtWOMEN")).map(products =>(
 <GroupComponent5
        image9={products.image1}
        chinos="POLOS"
        dontCareClub={products.title}
        prop={products.price}
        id={products._id}
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
      <div className="absolute top-[778px] left-[490px]">Home / Readymade</div>
    </div>
  );
};

export default ReadymadeTshirtWOMENPag;
