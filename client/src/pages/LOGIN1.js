import LoginContainer from "../components/LoginContainer";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";

const LOGIN1 = () => {
  return (
    <div className="w-full relative bg-white h-[1612px] overflow-hidden text-left text-xl text-dimgray-200 font-poppins">
      <LoginContainer />
      <div className="absolute top-[228px] left-[98px] text-13xl font-semibold text-black">
        Sign up today and you will be able to :
      </div>
      <div className="absolute top-[288px] left-[98px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur. Et lobortis justo
        </p>
        <p className="m-0">augue lobortis dictumst fermentum nibh mattis.</p>
      </div>
      <div className="absolute top-[378px] left-[153px]">
        Speed your way through checkout
      </div>
      <div className="absolute top-[415px] left-[153px]">
        Track your orders easily
      </div>
      <img
        className="absolute top-[383px] left-[108px] w-[23.1px] h-[17px]"
        alt=""
        src="/vector-24.svg"
      />
      <img
        className="absolute top-[420px] left-[108px] w-[23.1px] h-[17px]"
        alt=""
        src="/vector-24.svg"
      />
      <Header
        solarbagOutline="/solarbagoutline1.svg"
        basilnotificationOutline="/phheart.svg"
        codiconaccount="/codiconaccount.svg"
        ionsearch="/ionsearch.svg"
        propLeft="0px"
        propBackgroundColor="#ffbb64"
        propBackgroundColor1="#ffeaa7"
        propColor="#8a8a8a"
        propColor1="#000"
        propColor2="#000"
        propBackgroundColor2="#ff6868"
        propTop="calc(50% - 22.5px)"
        propTop1="calc(50% - 22.5px)"
        propTop2="calc(50% - 22.5px)"
      />
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

export default LOGIN1;
