import MainHeader from "../components/MainHeader";
import ListboxComponent from "../components/ListboxComponent";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent5 from "../components/GroupComponent5";
import GroupComponent6 from "../components/GroupComponent6";
import FrameComponent1 from "../components/FrameComponent1";
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const ReadymadeKIDSPage = () => {
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
    <div className="w-full relative bg-white h-[2873px] overflow-hidden text-left text-xl text-white font-made-tommy">
      <img
        className="absolute top-[89px] left-[-380px] w-[2295px] h-[588px] object-cover"
        alt=""
        src="/image-22@2x.png"
      />
     <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <div className="absolute top-[89px] left-[1301px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-11xl bg-salmon-100 flex flex-row items-start justify-start gap-[10px] text-9xl">
        <div className="rounded-t-none rounded-br-none rounded-bl-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">MEN</div>
        </div>
        <div className="bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">WOMEN</div>
        </div>
        <div className="rounded-t-none rounded-br-11xl rounded-bl-none bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[15px]">
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
      {/* <ListboxComponent
        chevron="/chevron.svg"
        propTop="816px"
        propLeft="1333px"
        propHeight="1px"
        propOpacity="0"
        propBackgroundColor="unset"
        propBackgroundColor1="#fff"
        propBackgroundColor2="#fff"
        propBackgroundColor3="#fff"
      /> */}
      <div className="absolute top-[833px] left-[490px] font-poppins text-black">
        Girls Cotton Dresses
      </div>
      <div className="absolute top-[835px] left-[814px] rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] text-base text-dimgray-300 font-poppins border-[1px] border-solid border-darkgray-100">
        <div className="relative">All T-Shirt</div>
        <img
          className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/phx.svg"
        />
      </div>
      <FrameComponent6
        girlsCottonTShirtDresses="Girls Cotton T-Shirt Dresses"
        allTShirt="All T-shirt"
        girlsCottonDresses="Girls Cotton Dresses"
        girlsCottonPoloDresses="Girls Cotton Polo Dresses"
      />
      <FrameComponent4 propTop="1626px" propHeight="297px" />
      <div className="absolute top-[1286px] left-[25px] shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[412px] h-[285px] overflow-hidden text-lg text-dimgray-700 border-[0.7px] border-solid border-darkgray-500">
        <div className="absolute top-[78px] left-[calc(50%_-_179px)] rounded-6xs bg-whitesmoke-200 box-border w-[359px] h-10 flex flex-row items-center justify-center p-2.5 text-darkgray-400 border-[0.7px] border-solid border-silver">
          <div className="w-[123px] absolute !m-[0] top-[calc(50%_-_11px)] left-[20.5px] inline-block z-[0]">
            Search for Size
          </div>
        </div>
        <div className="absolute top-[145px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[41px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_20px)] inline-block z-[0]">
            2-3Y
          </div>
        </div>
        <div className="absolute top-[200px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[55px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_27px)] inline-block z-[0]">
            10-11Y
          </div>
        </div>
        <div className="absolute top-[145px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[42px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_21px)] inline-block z-[0]">
            4-5Y
          </div>
        </div>
        <div className="absolute top-[200px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[55px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_27px)] inline-block z-[0]">
            12-13Y
          </div>
        </div>
        <div className="absolute top-[145px] left-[218px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-10 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_20px)] inline-block z-[0]">
            6-7Y
          </div>
        </div>
        <div className="absolute top-[200px] left-[218px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[57px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_28px)] inline-block z-[0]">
            14-15Y
          </div>
        </div>
        <div className="absolute top-[145px] left-[308px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[42px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_21px)] inline-block z-[0]">
            8-9Y
          </div>
        </div>
        <div className="absolute top-[28px] left-[27px] text-7xl tracking-[0.02em] font-medium font-poppins text-black">
          SIZE
        </div>
      </div>

      <div className='absolute top-[946px] left-[503px] flex flex-row gap-8'>
      {
          products.filter((e)=>(e.category==="ReadymadeKIDS")).map(products =>(
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
        <img
          className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
          alt=""
          src="/solarbagoutline6.svg"
        />
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
      <div className="absolute top-[88px] left-[211px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-xl flex flex-row items-start justify-start">
        <div className="rounded-t-none rounded-br-none rounded-bl-xl bg-salmon-100 flex flex-row items-center justify-center p-2.5">
          <div className="relative font-medium">GIRLS</div>
        </div>
        <div className="rounded-t-none rounded-br-xl rounded-bl-none bg-white flex flex-row items-center justify-center p-2.5 text-salmon-100">
          <div className="relative font-medium">BOYS</div>
        </div>
      </div>
      <div className="absolute top-[778px] left-[490px] text-base font-poppins text-dimgray-300">
        Home / Readymade
      </div>
    </div>
  );
};

export default ReadymadeKIDSPage;
