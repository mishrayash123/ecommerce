import LoginFormWrapper from "../components/LoginFormWrapper";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";

const LOGIN = () => {
  return (
    <div className=" flex md:flex-row flex-col md:p-4 space-y-7 md:space-y-0  md:justify-center  bg-white md:h-[30rem] h-[48rem]  md:space-x-12   overflow-hidden   text-xl text-dimgray-200 font-poppins">
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
   <LoginFormWrapper />
      {/* <div className="absolute top-[228px] left-[20px] text-13xl font-semibold text-black">
        Sign up today and you will be able to :
      </div>
      <div className="absolute top-[288px] left-[20px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur. Et lobortis justo
        </p>
        <p className="m-0">augue lobortis dictumst fermentum nibh mattis.</p>
      </div>
      <div className="absolute top-[378px] left-[50px]">
        Speed your way through checkout
      </div>
      <div className="absolute top-[415px] left-[50px]">
        Track your orders easily
      </div>
      <img
        className="absolute top-[383px] left-[20px] w-[23.1px] h-[17px]"
        alt=""
        src="/vector-24.svg"
      />
      <img
        className="absolute top-[420px] left-[20px] w-[23.1px] h-[17px]"
        alt=""
        src="/vector-24.svg"
      /> */}
                        {/* <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" /> */}
      {/* <FrameComponent1
        frame10="/frame-10.svg"
        frame11="/frame-11.svg"
        frame12="/frame-12.svg"
        frame14="/frame-14.svg"
        propTop="unset"
        propBottom="0px"
        propBackgroundColor="#ff6868"
        propBackgroundColor1="#ebebeb"
        propBackgroundColor2="#ff6868"
      /> */}
    </div>
  );
};

export default LOGIN;
