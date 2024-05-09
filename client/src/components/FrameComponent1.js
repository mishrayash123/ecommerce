import { useMemo } from "react";


const FrameComponent1 = ({
  frame10,
  frame11,
  frame12,
  frame14,
  propTop,
  propBottom,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const frameDiv5Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv6Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  return (
    <div
      className="absolute top-[4972px] left-[0px] w-[1728px] h-[489px] text-left text-base text-white font-red-hat-display"
      style={frameDiv4Style}
    >
      <div
        className="absolute top-[0px] left-[0px] bg-salmon-100 w-[1039px] h-[489px] overflow-hidden"
        style={frameDiv5Style}
      >
        <div className="absolute top-[415px] left-[29.5px] text-lg leading-[30.6px]">
          © Copyright 2023. All Rights Reserved
        </div>
        <div className="absolute top-[390.6px] left-[400px] w-[396px] flex flex-row items-start justify-end py-0 pr-0 pl-[247.9px] box-border text-lg">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-10">
            <div className="relative leading-[27px]">Privacy Policy</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-10 ml-[-0.4px]">
            <div className="relative leading-[27px]">Term of Service</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-10 ml-[-0.4px]">
            <div className="relative leading-[27px]">Legal Info</div>
          </div>
        </div>
        <div className="absolute top-[49px] left-[174px] text-5xl leading-[30.6px] font-extrabold">
          NEED HELP
        </div>
        <div className="absolute top-[49px] left-[384px] text-5xl leading-[30.6px] font-extrabold">
          COMPANY
        </div>
        <div className="absolute top-[99px] left-[174px] leading-[30.6px] font-medium">
          Contact Us
        </div>
        <div className="absolute top-[99px] left-[384px] leading-[30.6px] font-medium">
          About Us
        </div>
        <div className="absolute top-[129px] left-[174px] leading-[30.6px] font-medium">
          Track Order
        </div>
        <div className="absolute top-[129px] left-[384px] leading-[30.6px] font-medium">
          Careers
        </div>
        <div className="absolute top-[159px] left-[174px] leading-[30.6px] font-medium">
          FAQs
        </div>
        <div className="absolute top-[159px] left-[384px] leading-[30.6px] font-medium">
          Privacy Policy
        </div>
        <div className="absolute top-[189px] left-[174px] leading-[30.6px] font-medium">
          My Account
        </div>
      </div>
      <div
        className="absolute top-[105px] left-[853px] bg-whitesmoke-400 w-[825px] h-96 overflow-hidden text-29xl text-black font-vujahday-script"
        style={frameDiv6Style}
      >
        <img
          className="absolute top-[90.9px] left-[368.9px] w-[70.7px] h-[70.7px] overflow-hidden object-contain"
          alt=""
          src="/teenyiconsarrowsolid@2x.png"
        />
        <img
          className="absolute top-[59px] left-[517px] rounded-14xl w-[50px] h-[50px] overflow-hidden"
          alt=""
          src={frame10}
        />
        <img
          className="absolute top-[131px] left-[517px] rounded-11xl w-[50px] h-[50px] overflow-hidden"
          alt=""
          src={frame11}
        />
        <img
          className="absolute top-[59px] left-[579px] rounded-19xl w-[50px] h-[50px] overflow-hidden"
          alt=""
          src={frame12}
        />
        <img
          className="absolute top-[131px] left-[579px] rounded-27xl w-[50px] h-[50px] overflow-hidden"
          alt=""
          src={frame14}
        />
        <div className="absolute top-[106px] left-[54px] leading-[30.6px]">
          Get The Latest
        </div>
        <img
          className="absolute top-[148.5px] left-[60px] max-h-full w-[380px]"
          alt=""
          src="/vector-6.svg"
        />
        <div className="absolute top-[178px] left-[67px] text-mini leading-[21px] font-lato flex items-center w-[402px]">
          Lorem ipsum dolor sit amet consectetur. Eu ut orci amet egestas id in
          facilisis eget.
        </div>
      </div>
      <div
        className="absolute top-[63px] left-[1459px] bg-salmon-100 w-[269px] h-[67px]"
        style={rectangleDivStyle}
      />
    </div>
  );
};

export default FrameComponent1;
