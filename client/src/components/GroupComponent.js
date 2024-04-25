import { useMemo } from "react";

const GroupComponent = ({
  mingcuteupFill,
  vector1,
  solarbagOutline,
  propTop,
  propBackgroundColor,
  propColor,
  propColor1,
  propColor2,
  propColor3,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const pOLOSStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const menTShirtStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const divStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const mRPInclOfStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div
      className="absolute top-[3471px] left-[28px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[382px] h-[606px] text-left text-xl text-dimgray-600 font-inter"
      style={groupDivStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-t-8xl rounded-br-139xl rounded-bl-8xl bg-bisque w-[382px] h-[606px] overflow-hidden"
        style={frameDivStyle}
      >
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src={mingcuteupFill}
        />
        <img
          className="absolute top-[-36px] left-[39px] w-[304px] h-[443px] object-cover"
          alt=""
          src="/indianmansimplewhiteteestudioportrait-53876102833-1@2x.png"
        />
        <div
          className="absolute top-[430px] left-[15px] text-13xl font-semibold text-black"
          style={pOLOSStyle}
        >
          POLOS
        </div>
        <div
          className="absolute top-[479px] left-[15px]"
          style={menTShirtStyle}
        >
          Men T-Shirt
        </div>
        <img
          className="absolute top-[569.3px] left-[calc(50%_-_176px)] max-h-full w-[333px]"
          alt=""
          src={vector1}
        />
        <div
          className="absolute top-[508px] left-[15px] font-semibold"
          style={divStyle}
        >
          ₹599
        </div>
        <div
          className="absolute top-[580px] left-[15px] text-sm"
          style={mRPInclOfStyle}
        >
          MRP incl. of all taxes
        </div>
        <div className="absolute top-[0px] left-[333px] bg-gainsboro-100 w-[54px] h-[407px]" />
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[54px] h-[407px]" />
      </div>
      <img
        className="absolute top-[516px] left-[292px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src={solarbagOutline}
      />
    </div>
  );
};

export default GroupComponent;
