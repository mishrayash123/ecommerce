import MainHeader from "../components/MainHeader";
import FrameComponent6 from "../components/FrameComponent6q";
import { useAuth } from "../AuthContext";
import FrameComponent1 from "../components/FrameComponent1";
import {useNavigate} from 'react-router-dom'

const PROFILE = () => {
  const email = localStorage.getItem("email");
  const nav = useNavigate();
  const {logout} = useAuth();

  return (
    <div>
      <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
    <div className="w-full  bg-white  overflow-hidden text-left text-mini text-black font-made-tommy">
                                          
      <div className="flex  flex-col lg:flex-row  justify-evenly m-5">
        <div className="space-y-9 flex flex-col  justify-center lg:justify-start items-center md:justify-start">
      <div className=" bg-gainsboro-100 w-[313px]  p-2 text-sm font-inter">
        <div className=" font-semibold">
          Email
        </div>
        <div className=" text-xs text-dimgray-300 text-left">
          {email}
        </div>
      </div>

      <div>
      <div className=" bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="" style={{ fontFamily: 'Roboto', fontWeight:"bold" }}>
          Profile
        </div>
      </div>
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer" onClick={()=>{
        nav('/frame-80');
      }}>
        <div className=" font-light">
          Edit Address
        </div>
      </div>
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer"  onClick={()=>{
        nav('/wishlist-page');
      }}>
        <div className=" font-light">
          Your Orders
        </div>
      </div>
        </div>

      {/* Logout Button */}
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }}
        onClick={logout}
        >
          Logout
        </button>
      </div>
          </div>

        
      <FrameComponent6 />
        
          
          </div>

     

          
    </div>
    <div className="mt-auto ">
        <FrameComponent1
          frame10="/frame-10.svg"
          frame11="/frame-11.svg"
          frame12="/frame-12.svg"
          frame14="/frame-14.svg"
          propBackgroundColor="salmon"
          propBackgroundColor1="whitesmoke"
          propBackgroundColor2="salmon"
        />
      </div>
    </div>
  );
};

export default PROFILE;
