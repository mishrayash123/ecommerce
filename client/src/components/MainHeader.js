import { useMemo } from "react";

const MainHeader = ({
  solarbagOutline,
  prop,
  vectorIconTop,
  frameDivTop,
  divTop,
  propLeft,
  propTop,
  propLeft1,
}) => {
  const vectorIcon3Style = useMemo(() => {
    return {
      top: vectorIconTop,
    };
  }, [vectorIconTop]);

  const vectorIcon4Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  const vectorIcon5Style = useMemo(() => {
    return {
      top: divTop,
    };
  }, [divTop]);

  const frameDiv9Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const div1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft1,
    };
  }, [propTop, propLeft1]);

  return (
    <div className="absolute top-[0px] left-[0px] bg-sandybrown w-[1728px] h-[89px] overflow-hidden text-left text-xl text-black font-made-tommy">
      <img
        className="absolute top-[27px] left-[1566px] w-[35px] h-[35px] overflow-hidden"
        alt=""
        src={solarbagOutline}
      />
      <img
        className="absolute top-[27px] left-[1506px] w-[35px] h-[35px] overflow-hidden"
        alt=""
        src="/phheart.svg"
      />
      <img
        className="absolute top-[27px] left-[1626px] rounded-45xl w-[35px] h-[35px] overflow-hidden"
        alt=""
        src="/codiconaccount.svg"
      />
      <div className="absolute top-[calc(50%_-_25.5px)] left-[calc(50%_+_6px)] rounded-3xl bg-palegoldenrod w-[334px] h-[51px] overflow-hidden text-base text-gray-300 font-inter">
        <img
          className="absolute top-[calc(50%_-_13.5px)] left-[25px] w-[26px] h-[26px] overflow-hidden"
          alt=""
          src="/ionsearch.svg"
        />
        <div className="absolute top-[calc(50%_-_9.5px)] left-[75px] font-semibold">
          What are you looking for?
        </div>
      </div>
      <div className="absolute top-[30px] left-[1246px]">Track Order</div>
      <div className="absolute top-[30px] left-[1379px]">Contact Us</div>
      <div className="absolute top-[-1px] left-[-95px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-br-51xl rounded-bl-none bg-salmon-100 w-[909px] h-[89px] overflow-hidden text-5xl text-white">
        <div className="absolute top-[30px] left-[351px] flex flex-row items-start justify-start">
          <b className="relative">Undergarments</b>
        </div>
        <div className="absolute top-[30px] left-[155px] flex flex-row items-start justify-start gap-[5px] text-center">
          <b className="relative">Readymade</b>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/mingcutedownfill.svg"
          />
        </div>
        <div className="absolute top-[30px] left-[571px] flex flex-row items-start justify-start">
          <b className="relative">Thermal</b>
        </div>
        <div className="absolute top-[30px] left-[705px] flex flex-row items-center justify-start gap-[5px] text-center">
          <b className="relative">Accessories</b>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/mingcutedownfill.svg"
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[335px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIcon3Style}
        />
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[552px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIcon4Style}
        />
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[688px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIcon5Style}
        />
      </div>
      <div
        className="absolute top-[21px] left-[1529px] rounded-20xl bg-salmon-100 w-5 h-5 overflow-hidden text-xs text-white font-inter"
        style={frameDiv9Style}
      >
        <div
          className="absolute top-[2px] left-[6px] font-extrabold"
          style={div1Style}
        >
          {prop}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
