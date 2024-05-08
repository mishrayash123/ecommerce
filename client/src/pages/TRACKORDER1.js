import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5q";
import Property1Frame6 from "../components/Property1Frame6q";
import { useAuth } from "../AuthContext";

const TRACKORDER1 = () => {
  const email = localStorage.getItem("email");
  const {logout} = useAuth();


  return (
    <div className="w-full relative bg-white h-[1475px] overflow-hidden text-left text-mini text-black font-made-tommy">
                                          <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <FrameComponent5 />
      <div className="absolute top-[176px] left-[169px] bg-gainsboro-100 w-[313px] h-[79px] overflow-hidden text-center text-sm font-inter">
        <div className="absolute top-[22px] left-[22px] font-semibold">
          Email
        </div>
        <div className="absolute top-[42px] left-[22px] text-xs text-dimgray-300 text-left">
        {email}
        </div>
      </div>
      <div className="absolute top-[176px] left-[596px] text-lg text-darkslategray-100">
        TRACKING ORDER
      </div>
      <div className="absolute top-[318px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          Profile
        </div>
      </div>
      <div className="absolute top-[357px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          Track Order
        </div>
        
      </div>
      <div className="absolute top-[396px] left-[169px] bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px]">FAQ</div>
      </div>
         {/* Logout Button */}
      <div className="absolute top-[480px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }} onClick={logout}>
          Logout
        </button>
      </div>


      <Property1Frame6 frameDivTop="225px" frameDivLeft="596px" />
    </div>
  );
};

export default TRACKORDER1;
