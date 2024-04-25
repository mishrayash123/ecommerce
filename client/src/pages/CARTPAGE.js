import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent14 from "../components/FrameComponent14";
import DiscountFormContainer from "../components/DiscountFormContainer";

const CARTPAGE = () => {
  return (
    <div className="w-full relative bg-white h-[1625px] overflow-hidden text-left text-base text-white font-inter">
      <MainHeader
        solarbagOutline="/solarbagoutline7.svg"
        prop="1"
        vectorIconTop="calc(50% - 23px)"
        frameDivTop="calc(50% - 23px)"
        divTop="calc(50% - 23px)"
        propLeft="1588px"
        propTop="calc(50% - 7px)"
        propLeft1="calc(50% - 3px)"
      />
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
      <FrameComponent14 />
      <div className="absolute top-[389px] left-[1115px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div className="absolute top-[311px] left-[1115px] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[186px] text-5xl font-made-tommy">
        <b className="relative">PLACE ORDER</b>
      </div>
      <div className="absolute top-[768px] left-[1115px] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[186px] text-5xl font-made-tommy">
        <b className="relative">PLACE ORDER</b>
      </div>
      <DiscountFormContainer />
    </div>
  );
};

export default CARTPAGE;
