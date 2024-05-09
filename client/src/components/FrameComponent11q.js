import { useMemo } from "react";

const FrameComponent11 = ({ k, k1, k2, k3, k4, propBackgroundColor }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="absolute top-[389px] left-[485px] rounded-4xl bg-limegreen-300 w-[1043px] h-[457px] overflow-hidden text-left text-xl text-white font-made-tommy"
      style={frameDiv5Style}
    >
      <div className="absolute top-[263px] left-[162px] rounded-t-3xs rounded-b-none bg-white w-5 h-[124px] overflow-hidden" />
      <div className="absolute top-[236px] left-[293px] rounded-t-3xs rounded-b-none bg-white w-5 h-[151px] overflow-hidden" />
      <div className="absolute top-[227px] left-[424px] rounded-t-3xs rounded-b-none bg-white w-5 h-40 overflow-hidden" />
      <div className="absolute top-[173px] left-[556px] rounded-t-3xs rounded-b-none bg-white w-5 h-[214px] overflow-hidden" />
      <div className="absolute top-[186px] left-[678px] rounded-t-3xs rounded-b-none bg-white w-5 h-[201px] overflow-hidden" />
      <div className="absolute top-[95px] left-[798px] rounded-t-3xs rounded-b-none bg-white w-5 h-[292px] overflow-hidden" />
      <div className="absolute top-[95px] left-[918px] rounded-t-3xs rounded-b-none bg-white w-5 h-[292px] overflow-hidden" />
      <div className="absolute top-[400px] left-[calc(50%_-_370px)] flex flex-row items-start justify-start gap-[93px]">
        <div className="relative font-medium">Mon</div>
        <div className="relative font-medium">Tue</div>
        <div className="relative font-medium">Wed</div>
        <div className="relative font-medium">Thu</div>
        <div className="relative font-medium">Fri</div>
        <div className="relative font-medium">Sat</div>
        <div className="relative font-medium">Sun</div>
      </div>
      <div className="absolute top-[54px] left-[42px] flex flex-col items-start justify-start gap-[41px]">
        <div className="relative font-medium">{k}</div>
        <div className="relative font-medium">{k1}</div>
        <div className="relative font-medium">{k2}</div>
        <div className="relative font-medium">{k3}</div>
        <div className="relative font-medium">{k4}</div>
      </div>
      <img
        className="absolute top-[386.5px] left-[-18.5px] max-h-full w-[1083.5px]"
        alt=""
        src="/vector-57q.svg"
      />
      <img
        className="absolute top-[-236.7px] left-[113.8px] max-w-full overflow-hidden h-[1083.5px] object-contain"
        alt=""
        src="/vector-58q.svg"
      />
    </div>
  );
};

export default FrameComponent11;
