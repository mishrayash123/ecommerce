import { useMemo } from "react";

const GroupComponent6 = ({
  image11,
  kungFuPandaTShirt,
  propLeft,
  propWidth,
}) => {
  const image11IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className="absolute top-[1576px] left-[503px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mingcuteupfill.svg"
        />
        <img
          className="absolute top-[0px] left-[calc(50%_-_184px)] w-[370px] h-[407px] object-cover"
          alt=""
          src={image11}
          style={image11IconStyle}
        />
        <div className="absolute top-[430px] left-[15px] text-5xl font-semibold text-black">
          POLOS
        </div>
        <div className="absolute top-[469px] left-[15px]">
          {kungFuPandaTShirt}
        </div>
        <img
          className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
          alt=""
          src="/vector-13.svg"
        />
        <div className="absolute top-[498px] left-[15px] font-semibold">
          ₹999
        </div>
        <div className="absolute top-[498px] left-[115px] font-light text-tomato-100">
          ₹300 OFF
        </div>
        <div className="absolute top-[499px] left-[65px] text-xs [text-decoration:line-through] font-semibold text-darkgray-700">
          ₹1299
        </div>
        <div className="absolute top-[528px] left-[16px] text-2xs">
          MRP incl. of all taxes
        </div>
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src="/solarbagoutline.svg"
      />
    </div>
  );
};

export default GroupComponent6;
