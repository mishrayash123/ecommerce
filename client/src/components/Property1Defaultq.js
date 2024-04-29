import { useMemo } from "react";

const Property1Default = ({
  selectSortingOption,
  prop,
  prop1,
  prop2,
  prop3,
  showListBoxTitle,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className="w-[308px] h-[289px] text-left text-base text-darkslategray-600 font-montserrat"
      style={property1Default2Style}
    >
      {showListBoxTitle && (
        <div className="absolute h-[6.92%] w-[90.91%] top-[0%] right-[4.55%] bottom-[93.08%] left-[4.55%]">
          <div className="absolute top-[0%] left-[0%] font-medium">
            Sorting by
          </div>
        </div>
      )}
      <div className="absolute h-[20.76%] w-[90.91%] top-[9.69%] right-[4.55%] bottom-[69.55%] left-[4.55%] text-dimgray-200">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white" />
        <img
          className="absolute h-[8.33%] w-[3.57%] top-[46.67%] right-[7.86%] bottom-[45%] left-[88.57%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
          alt=""
          src="/chevronq.svg"
        />
        <div className="absolute h-[33.33%] w-[65.71%] top-[33.33%] right-[28.57%] bottom-[33.33%] left-[5.71%]">
          <div className="absolute top-[0%] left-[0%]">
            {selectSortingOption}
          </div>
        </div>
      </div>
      <div className="absolute h-[90.31%] w-full top-[9.69%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
        <div className="absolute w-[90.91%] top-[68px] right-[4.55%] left-[4.55%] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-lg h-px overflow-hidden flex flex-col items-center justify-center gap-[1px] opacity-[0]">
          <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">{prop}</div>
          </div>
          <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">{prop1}</div>
          </div>
          <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">{prop2}</div>
          </div>
          <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">{prop3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
