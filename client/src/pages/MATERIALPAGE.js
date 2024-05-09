import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import Property1Frame2 from "../components/Property1Frame2";
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from "react";

const MATERIALPAGE = () => {
  const location = useLocation();
  const [products, setproducts] = useState([]);

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

  return (
    <div className="w-full relative bg-white h-[2065px] overflow-hidden text-left text-lg text-gray-600 font-made-tommy">
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
      {
                    products.filter((e) => (e._id == location.state.id)).map(products => (
      <div>
      <img
        className="absolute top-[877px] left-[808px] rounded-14xl w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/frame-103.svg"
      />
      <img
        className="absolute top-[877px] left-[858px] rounded-11xl w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/frame-113.svg"
      />
      <img
        className="absolute top-[877px] left-[708px] rounded-19xl w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/frame-124.svg"
      />
      <img
        className="absolute top-[879px] left-[758px] rounded-27xl w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/frame-144.svg"
      />
      <img
        className="absolute top-[756px] left-[65px] w-[420px] h-[560px] object-cover"
        alt=""
        src={products.image1}
      />
      <img
        className="absolute top-[179px] left-[65px] w-[420px] h-[560px] object-cover"
        alt=""
        src={products.image2}
      />
      <b className="absolute top-[179px] left-[621px] text-29xl font-inter text-black">
        {products.title}
      </b>
      <div className="absolute top-[242px] left-[621px] text-base font-poppins text-dimgray-300">
        {products.category}
      </div>
      <img
        className="absolute top-[295.5px] left-[621.5px] max-h-full w-[864px]"
        alt=""
        src="/vector-8.svg"
      />
      <b className="absolute top-[325px] left-[621px] text-17xl font-inter text-gray-800">
        {products.price}
      </b>
      <div className="absolute top-[382px] left-[622px] text-xl font-inter">
        MRP incl. of all taxes
      </div>
      <div className="absolute top-[681px] left-[622px] text-xl font-inter">
        Quantity
      </div>
      <div className="absolute top-[891px] left-[622px] text-xl font-inter">
        Share
      </div>
      <div className="absolute top-[472px] left-[622px] text-xl font-semibold font-inter">
        Please select a size.
      </div>
      <div className="absolute top-[612px] left-[622px] text-xl font-inter">
        <span>
          <b>Size not available?</b>
          <span className="font-semibold font-inter whitespace-pre-wrap">{`  `}</span>
        </span>
        <span className="[text-decoration:underline] text-salmon-100">
          Notify Me
        </span>
      </div>
      <div className="absolute top-[519px] left-[621px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-darkgray-200 border-[2px] border-solid border-darkgray-200">
        <div className="w-[33px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_16px)] inline-block z-[0]">
          XXS
        </div>
      </div>
      <div className="absolute top-[519px] left-[1013px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-dimgray-700 border-[2px] border-solid border-black">
        <div className="w-[9px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_4px)] inline-block z-[0]">
          L
        </div>
      </div>
      <div className="absolute top-[519px] left-[719px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-darkgray-200 border-[2px] border-solid border-darkgray-200">
        <div className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]">
          XS
        </div>
      </div>
      <div className="absolute top-[519px] left-[1111px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-dimgray-700 border-[2px] border-solid border-black">
        <div className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]">
          XL
        </div>
      </div>
      <div className="absolute top-[519px] left-[817px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-dimgray-700 border-[2px] border-solid border-black">
        <div className="w-[11px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_5px)] inline-block z-[0]">
          S
        </div>
      </div>
      <div className="absolute top-[675px] left-[728px] rounded-[14px] box-border w-[72px] h-9 flex flex-row items-center justify-center py-[7px] px-4 gap-[10px] text-black border-[1px] border-solid border-black">
        <div className="w-5 absolute !m-[0] top-[calc(50%_-_11px)] left-[10px] inline-block z-[0]">
          01
        </div>
        <img
          className="w-[13px] absolute !m-[0] top-[15px] left-[45px] h-1.5 z-[1]"
          alt=""
          src="/vector-131.svg"
        />
      </div>
      <div className="absolute top-[519px] left-[1209px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-darkgray-200 border-[2px] border-solid border-darkgray-200">
        <div className="w-8 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_16px)] inline-block z-[0]">
          XXL
        </div>
      </div>
      <div className="absolute top-[519px] left-[915px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-salmon-100 border-[4px] border-solid border-salmon-100">
        <b className="w-[17px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_8px)] inline-block z-[0]">
          M
        </b>
      </div>
      <div className="absolute top-[519px] left-[1307px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-darkgray-200 border-[2px] border-solid border-darkgray-200">
        <div className="w-[43px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_21px)] inline-block z-[0]">
          XXXL
        </div>
      </div>
      <img
        className="absolute top-[519.1px] left-[624px] w-[62px] h-[40.8px] object-contain"
        alt=""
        src="/vector-9.svg"
      />
      <img
        className="absolute top-[519.1px] left-[722px] w-[62px] h-[40.8px] object-contain"
        alt=""
        src="/vector-10.svg"
      />
      <img
        className="absolute top-[519.1px] left-[1212px] w-[62px] h-[40.8px] object-contain"
        alt=""
        src="/vector-10.svg"
      />
      <img
        className="absolute top-[519.1px] left-[1310px] w-[62px] h-[40.8px] object-contain"
        alt=""
        src="/vector-10.svg"
      />
      <div className="absolute top-[788px] left-[624px] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[99px] text-5xl text-white">
        <div className="relative font-medium">ADD TO CART</div>
      </div>
      <div className="absolute top-[788px] left-[1018px] rounded-md bg-white flex flex-row items-center justify-center py-2.5 px-[76.5px] text-center text-5xl text-salmon-100 border-[2px] border-solid border-salmon-100">
        <div className="relative font-medium">ADD TO WISHLIST</div>
      </div>
      <Property1Frame2 frameDivTop="961px" description={products.description}  details={products.details} frameDivLeft="622px" />

      </div>
                    ))}
    </div>

  );
};

export default MATERIALPAGE;
