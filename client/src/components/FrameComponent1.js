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
      className=" text-left text-base text-white static md:relative font-red-hat-display flex md:flex-row flex-col"
    >
      <div
        className=" bg-salmon-100  md:w-3/5 w-screen  md:h-[489px] overflow-hidden flex flex-col justify-between"
      >
        <div className="flex  p-10 space-x-20">

          <div className="  space-y-1">
            <div className=" md:text-5xl leading-[30.6px] font-extrabold">
              NEED HELP
            </div>
            <div className=" leading-[30.6px] md:font-medium">
              Contact Us
            </div>
            <a href="/trackorder" className=" no-underline text-white">
              <div className=" leading-[30.6px] no-underline md:font-medium">
                Track Order
              </div>
            </a>
            <a href="/track-order" className=" no-underline text-white">
              <div className=" leading-[30.6px] no-underline md:font-medium">
                FAQs
              </div>
            </a>
            <a href="/profile" className=" no-underline text-white">
              <div className=" leading-[30.6px] no-underline md:font-medium">
                My Account
              </div>
            </a>

          </div>

          <div>

            <div className=" md:text-5xl leading-[30.6px] font-extrabold">
              COMPANY
            </div>

            <div className=" leading-[30.6px] font-medium">
              About Us
            </div>

            <div className=" leading-[30.6px] font-medium">
              Careers
            </div>

            <div className=" leading-[30.6px] font-medium">
              Privacy Policy
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center space-x-8">
          <div className=" text-lg leading-[30.6px]">
            © Copyright 2023. All Rights Reserved
          </div>
          <div className=" w-3/5 flex flex-row items-start md:space-x-5 py-0  pr-0   box-border md:text-lg">
            <p>Privacy Policy</p>
            <p>Term Of Service</p>
            <p>Legal Info</p>
          </div>

        </div>


      </div>


      <div
        className=" bg-whitesmoke-400 md:w-2/4 w-3/4  p-10 md:p-0 left-1/2 static md:absolute h-96 top-[6.5rem] overflow-hidden flex flex-col lg:flex-row items-center text-29xl text-black font-vujahday-script"
      >
        <div>
          <div className=" leading-[30.6px] ml-6 md:ml-0">
            Get The Latest
          </div>
          <img
            className=" md:max-h-full md:w-[380px]"
            alt=""
            src="/vector-6.svg"
          />
          <div className=" text-mini  p-10 md:p-0 md:leading-[21px] font-lato flex items-center md:w-[402px]">
            Lorem ipsum dolor sit amet consectetur. Eu ut orci amet egestas id in
            facilisis eget.
          </div>
        </div>
        <div>
          <img
            className=" w-[70.7px] h-[70.7px] overflow-hidden object-contain"
            alt=""
            src="/teenyiconsarrowsolid@2x.png"
          />
          <img
            className=" rounded-14xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src={frame10}
          />
          <img
            className=" rounded-11xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src={frame11}
          />
          <img
            className=" rounded-19xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src={frame12}
          />
          <img
            className=" rounded-27xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src={frame14}
          />
        </div>

        <div
          className=" bg-salmon-100 absolute  hidden lg:block left-[28rem]  bottom-[22rem] z-50 overflow-visible w-[269px] h-[67px]"
        />
      </div>

    </div>
  );
};

export default FrameComponent1;
