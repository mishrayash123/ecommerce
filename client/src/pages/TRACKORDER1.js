import MainHeader from "../components/MainHeader";
import Property1Frame6 from "../components/Property1Frame6q";
import FrameComponent1 from "../components/FrameComponent1";
import { useAuth } from "../AuthContext";
import {useNavigate} from 'react-router-dom'

const TRACKORDER1 = () => {
  const email = localStorage.getItem("email");
  const {logout} = useAuth();
  const nav = useNavigate();


  return (
    <div>
      <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
    <div className=" flex  flex-col sm:flex-row h-96  justify-evenly w-screen float-right  text-black font-made-tommy m-5">
                                         
      <div className="space-y-9 flex flex-col  justify-center lg:justify-start items-center md:justify-start">
      <div className=" bg-gainsboro-100 w-48  overflow-hidden  text-sm font-inter">
        <div className=" font-semibold">
          Email
        </div>
        <div className=" text-xs text-dimgray-300 text-left">
        {email}
        </div>
      </div>
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300 cursor-pointer" onClick={()=>{
        nav('/profile');
      }}>
        <div className=" font-light">
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
      <div className=" bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-silver-300">
        <div className="">FAQ</div>
      </div>
         {/* Logout Button */}
      <div className=" bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }} onClick={logout}>
          Logout
        </button>
      </div>
        </div>


       
      <Property1Frame6 frameDivTop="225px" frameDivLeft="596px" />
        


      {/* </div> */}
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

export default TRACKORDER1;
