import { useMemo } from "react";
import Property1Variant from "./Property1Variantq";

const FrameComponent12 = ({
  todaysSales,
  prop,
  thanLastWeek,
  prop1,
  frame92,
  prop2,
  propColor,
  showListBoxTitle,
  showDiv,
  showItem,
  showDiv1,
  listBoxTitle,
}) => {
  const spanStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="absolute top-[227px] left-[480px] shadow-[0px_11px_25px_rgba(0,_0,_0,_0.1)] rounded-7xl bg-white w-[1000px] h-[97px] overflow-hidden text-left text-base text-black font-made-tommy">
      <div className="absolute top-[14px] left-[110px] text-lg font-light">
        {todaysSales}
      </div>
      <div className="absolute top-[65px] left-[110px] text-sm text-limegreen-100">
        <span className="font-medium" style={spanStyle}>
          {prop}
        </span>
        <span className="font-light text-black">{thanLastWeek}</span>
      </div>
      <b className="absolute top-[41px] left-[110px] font-inter text-gray-600">
        {prop1}
      </b>
      <img
        className="absolute top-[calc(50%_-_34.5px)] left-[28px] rounded-2xs w-[62px] h-[62px] overflow-hidden"
        alt=""
        src={frame92}
      />
    </div>
  );
};

export default FrameComponent12;
