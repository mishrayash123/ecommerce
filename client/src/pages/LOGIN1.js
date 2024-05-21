import LoginContainer from "../components/LoginContainer";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";

const LOGIN1 = () => {
  return (
    <div>
      <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
    <div className="flex md:flex-row flex-col  md:p-4 space-y-7  md:space-y-0  md:justify-center  bg-white md:h-[35rem] h-[55rem]  md:space-x-12   overflow-hidden   text-xl text-dimgray-200 font-poppins">
         <div className="space-y-3 p-2">
      <div className="md:text-13xl font-semibold text-black">
      Sign up today and you will be able to :
      </div>
      <div className=" ">
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur. Et lobortis justo
        </p>
        <p className="m-0">augue lobortis dictumst fermentum nibh mattis.</p>
      </div>
      <div className="">
      <img
        className="w-[23.1px] h-[17px]"
        alt=""
        src="/vector-24.svg"
      />
        Speed your way through checkout
      </div>
      <div className="">
      <img
        className=" w-[23.1px] h-[17px]"
        alt=""
        src="/vector-24.svg"
      />
        Track your orders easily
      </div>
   </div>
   <LoginContainer />
     
      
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

export default LOGIN1;
