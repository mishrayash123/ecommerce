import MainHeader from "../components/MainHeaderq";
import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent6 from "../components/FrameComponent6q";

const PROFILE = () => {
  return (
    <div className="w-full relative bg-white h-[1625px] overflow-hidden text-left text-mini text-black font-made-tommy">
      <MainHeader />
      <FrameComponent5 />
      <div className="absolute top-[176px] left-[169px] bg-gainsboro-100 w-[313px] h-[79px] overflow-hidden text-center text-sm font-inter">
        <div className="absolute top-[22px] left-[22px] font-semibold">
          Minisha
        </div>
        <div className="absolute top-[42px] left-[22px] text-xs text-dimgray-300 text-left">
          minishamanoj@gmail.com
        </div>
      </div>
      <div className="absolute top-[176px] left-[596px] text-lg text-darkslategray-100">
        EDIT PROFILE
      </div>
      <div className="absolute top-[318px] left-[169px] bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px]">
          Profile
        </div>
      </div>
      <div className="absolute top-[357px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          Track Order
        </div>
      </div>
      <div className="absolute top-[396px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          FAQ
        </div>
      </div>
      <FrameComponent6 />
    </div>
  );
};

export default PROFILE;