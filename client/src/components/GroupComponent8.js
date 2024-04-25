import { useMemo } from "react";

const GroupComponent8 = ({
  image35,
  jairyShopThermal,
  prop,
  propLeft,
  propLeft1,
  propWidth,
  propLeft2,
  propWidth1,
  propLeft3,
  propWidth2,
}) => {
  const groupDiv4Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const image35IconStyle = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth1,
    };
  }, [propLeft2, propWidth1]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className="absolute top-[946px] left-[898px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter"
      style={groupDiv4Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mingcuteupfill.svg"
        />
        <img
          className="absolute top-[0px] left-[calc(50%_-_55px)] w-[108px] h-80 object-cover"
          alt=""
          src={image35}
          style={image35IconStyle}
        />
        <div className="absolute top-[430px] left-[15px] text-5xl font-semibold text-black">
          Chinos
        </div>
        <div className="absolute top-[469px] left-[15px]">
          {jairyShopThermal}
        </div>
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
        <div
          className="absolute top-[-2px] left-[227px] bg-white w-32 h-[392px]"
          style={rectangleDiv1Style}
        />
        <div
          className="absolute top-[320px] left-[99px] bg-white w-32 h-[70px]"
          style={rectangleDiv2Style}
        />
        <div
          className="absolute top-[-2px] left-[-3px] bg-white w-[122px] h-[392px]"
          style={rectangleDiv3Style}
        />
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src="/solarbagoutline.svg"
      />
    </div>
  );
};

export default GroupComponent8;
