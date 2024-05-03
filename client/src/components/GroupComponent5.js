import { useMemo } from "react";

const GroupComponent5 = ({
  image9,
  chinos,
  dontCareClub,
  prop,
  solarbagOutline,
  propTop,
  propLeft,
  propTop1,
  propHeight,
  propLeft1,
  propWidth,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const image9IconStyle = useMemo(() => {
    return {
      top: propTop1,
      height: propHeight,
      left: propLeft1,
      width: propWidth,
    };
  }, [propTop1, propHeight, propLeft1, propWidth]);

  return (
    <div
      className="absolute top-[946px] left-[898px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter"
      style={groupDiv3Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mingcuteupfill.svg"
        />
        <img
          className="absolute top-[-44px] left-[calc(50%_-_174px)] w-[348px] h-[434px] object-cover"
          alt=""
          src={image9}
          style={image9IconStyle}
        />
        {/* <div className="absolute top-[430px] left-[15px] text-5xl font-semibold text-black">
          {chinos}
        </div> */}
        <div className="absolute top-[469px] left-[15px]">{dontCareClub}</div>
        <img
          className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
          alt=""
          src="/vector-13.svg"
        />
        <div className="absolute top-[498px] left-[15px] font-semibold">
          {prop}
        </div>
        <div className="absolute top-[528px] left-[16px] text-2xs">
          MRP incl. of all taxes
        </div>
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src={solarbagOutline}
      />
    </div>
  );
};

export default GroupComponent5;
