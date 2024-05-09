import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent4 from "../components/FrameComponent4q";
import FrameComponent3 from "../components/FrameComponent3q";
import FrameComponent1 from "../components/FrameComponent1";

const AFTERADDRESSPAGE = () => {
  
  return (
    <div className="w-full relative bg-white h-[1445px] overflow-hidden text-left text-base text-white font-inter">
                  <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      {/* <FrameComponent5 /> */}
      <div className="absolute top-[161px] left-[564px] rounded-11xl bg-salmon flex flex-row items-center justify-center py-2.5 px-8">
        <div className="relative font-semibold">MY BAG</div>
      </div>
      <div className="absolute top-[161px] left-[826px] rounded-11xl bg-salmon flex flex-row items-center justify-center py-2.5 px-8">
        <div className="relative font-semibold">ADDRESS</div>
      </div>
      <div className="absolute top-[161px] left-[1100px] rounded-11xl flex flex-row items-center justify-center py-2.5 px-8 text-black border-[1.5px] border-solid border-black">
        <div className="relative font-semibold">PAYMENT</div>
      </div>
      <img
        className="absolute top-[180.5px] left-[704.5px] max-h-full w-[109px]"
        alt=""
        src="/vector-141q.svg"
      />
      <img
        className="absolute top-[180.5px] left-[979.5px] max-h-full w-[109px]"
        alt=""
        src="/vector-15q.svg"
      />
      <FrameComponent4 />
      <div className="absolute top-[371px] left-[567px] rounded-10xs box-border w-[430px] h-[302px] overflow-hidden text-mini text-darkslategray-700 border-[1px] border-solid border-darkgray-600">
        <img
          className="absolute top-[calc(50%_-_83px)] left-[calc(50%_-_67px)] w-[135px] h-[135px] overflow-hidden object-cover"
          alt=""
          src="/iconparksolidadd@2xq.png"
        />
        <div className="absolute top-[215px] left-[calc(50%_-_73px)] font-medium">
          ADD NEW ADDRESS
        </div>
      </div>
      <div className="absolute top-[309px] left-[1115px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div className="absolute top-[309px] left-[87px] text-xl font-semibold text-darkslategray-800">
        Delivery To
      </div>
      <div className="absolute top-[668px] left-[1115px] rounded-md bg-salmon flex flex-row items-center justify-center py-2.5 px-[127.5px] text-5xl font-made-tommy">
        <b className="relative">CONTINUE TO PAYMENT</b>
      </div>
      <FrameComponent3 />
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
    </div>
  );
};

export default AFTERADDRESSPAGE;
