import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent6 from "../components/FrameComponent6q";
import { useAuth } from "../AuthContext";
import FrameComponent1 from "../components/FrameComponent1";
import {useNavigate} from 'react-router-dom'

const PROFILE = () => {
  const email = localStorage.getItem("email");
  const nav = useNavigate();
  const {logout} = useAuth();

  return (
    <div className="w-full relative bg-white h-[1625px] overflow-hidden text-left text-mini text-black font-made-tommy">
                                          <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
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
      <div className="absolute top-[176px] left-[20px] bg-gainsboro-100 w-[313px] h-[79px] overflow-hidden text-center text-sm font-inter">
        <div className="absolute top-[22px] left-[22px] font-semibold">
          Email
        </div>
        <div className="absolute top-[42px] left-[22px] text-xs text-dimgray-300 text-left">
          {email}
        </div>
      </div>
      <div className="absolute top-[176px] left-[480px] text-lg text-darkslategray-100">
        EDIT PROFILE
      </div>
      <div className="absolute top-[318px] left-[20px] bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px]" style={{ fontFamily: 'Roboto', fontWeight:"bold" }}>
          Profile
        </div>
      </div>
      <div className="absolute top-[357px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer" onClick={()=>{
        nav('/frame-80');
      }}>
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          Edit Address
        </div>
      </div>
      <div className="absolute top-[396px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer"  onClick={()=>{
        nav('/wishlist-page');
      }}>
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          Your Orders
        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute top-[480px] left-[20px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }}
        onClick={logout}
        >
          Logout
        </button>
      </div>

      <FrameComponent6 />

     


    </div>
  );
};

export default PROFILE;
