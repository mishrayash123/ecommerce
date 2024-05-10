import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import ListboxComponent from "../components/ListboxComponent";


const ReadymadeTshirtMENPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Sorting Options");
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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="w-full relative bg-white h-[2873px] overflow-hidden text-left text-base text-dimgray-600 font-poppins">
      <img
        className="absolute top-[89px] left-[4px] w-[1724px] h-[588px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <div 
        className="absolute top-[749px] left-[946px] rounded-8xs bg-whitesmoke-200 flex flex-row items-center justify-center py-2.5 px-3.5 gap-[49px] text-xl text-black font-made-tommy border-[1px] border-solid border-gray-500"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="relative">{selectedOption}</div>
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md z-10">
            <div className="py-2">
              <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Select Sorting Options")}>Select Sorting Options-</div>
              <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Price- Low to High")}>Price- Low to High</div>
              <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Price- High to Low")}>Price- High to Low</div>
              <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Newest")}>Newest</div>
              <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Popularity")}>Popularity</div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-[833px] left-[490px] text-xl text-black">
        Men T-Shirt
      </div>
      <div className="absolute top-[835px] left-[654px] rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] text-dimgray-300 border-[1px] border-solid border-darkgray-100">
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
        menFullSleeveTShirts="Men Full Sleeve T-shirts"
        hoodedTShirts="Hooded T-shirts"
        jackets="Jackets"
        dropCutTShirts="Drop Cut T-shirts"
        easyFitFullSleeveTShirt="Easy Fit Full Sleeve T-shirt"
      />
      
      <FrameComponent4 />
      <FrameComponent3 />
      <div className='absolute top-[946px] left-[503px] flex flex-row gap-8'>
      {
          products.filter((e)=>(e.category==="ReadymadeTshirtMEN")).map(products =>(
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
          
          <div className="absolute top-[469px] left-[15px]">
            {products.title}
          </div>
          <img
            className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
            alt=""
            src="/vector-13.svg"
          />
          <div className="absolute top-[498px] left-[15px] font-semibold">
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
      <div className="absolute top-[778px] left-[490px] text-dimgray-300">
        Home / Readymade
      </div>
      {/* <ListboxComponent chevron="/chevron.svg" /> */}
    </div>
  );
};

export default ReadymadeTshirtMENPage;
