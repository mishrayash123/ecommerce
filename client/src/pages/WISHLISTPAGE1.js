import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";

const WISHLISTPAGE1 = () => {
  return (
    <div className="w-full relative bg-white h-[1588px] overflow-hidden text-left text-9xl text-black font-inter">
                                             <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <div className="absolute top-[147px] left-[calc(50%_-_755px)]">
        <span className="font-semibold">My Wishlist</span>
        <b> </b>
        <span>(2 items)</span>
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
      <div className="absolute top-[249px] left-[122px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[602px]">
        <FrameComponent13 />
        <img
          className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
          alt=""
          src="/solarbagoutline6.svg"
        />
      </div>
      <div className="absolute top-[249px] left-[580px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[602px]">
        <FrameComponent12 />
        <img
          className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
          alt=""
          src="/solarbagoutline6.svg"
        />
      </div>
    </div>
  );
};

export default WISHLISTPAGE1;
