import { useMemo } from "react";

const Property1Variant = ({
  prop,
  showListBoxTitle,
  showDiv,
  property1Variant4Position,
  property1Variant4Top,
  property1Variant4Left,
  showDiv1,
  showItem,
  listBoxTitle,
}) => {
  const property1Variant4Style = useMemo(() => {
    return {
      position: property1Variant4Position,
      top: property1Variant4Top,
      left: property1Variant4Left,
    };
  }, [property1Variant4Position, property1Variant4Top, property1Variant4Left]);

  return (
    <div
      className="w-[308px] h-[289px] text-left text-base text-darkslategray-600 font-montserrat"
      style={property1Variant4Style}
    >
      {showListBoxTitle && (
        <div className="absolute h-[6.92%] w-[90.91%] top-[0%] right-[4.55%] bottom-[93.08%] left-[4.55%]">
          <div className="absolute top-[0%] left-[0%] font-medium">
            Occupation
          </div>
        </div>
      )}
      <div className="absolute h-[12.8%] w-[90.91%] top-[9.69%] right-[4.55%] bottom-[77.51%] left-[4.55%] text-dimgray-200">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white" />
        <img
          className="absolute h-[13.51%] w-[3.57%] top-[45.95%] right-[7.86%] bottom-[40.54%] left-[88.57%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
          alt=""
          src="/chevronq.svg"
        />
        <div className="absolute h-[54.05%] w-[65.71%] top-[24.32%] right-[28.57%] bottom-[21.62%] left-[5.71%]">
          <div className="absolute top-[0%] left-[0%] opacity-[0]">
            Select Filter
          </div>
        </div>
      </div>
      <div className="absolute h-[23.88%] w-full top-[9.69%] right-[0%] bottom-[66.44%] left-[0%] overflow-hidden">
        <div className="absolute w-[90.91%] top-[-41px] right-[4.55%] left-[4.55%] rounded-lg overflow-hidden flex flex-col items-center justify-center gap-[1px]">
          <div className="self-stretch relative h-[37px] overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">Yesterday</div>
          </div>
          <div className="self-stretch relative h-[37px] overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">{prop}</div>
          </div>
          <div className="self-stretch relative h-[37px] overflow-hidden shrink-0">
            {showDiv && (
              <div className="absolute top-[12px] left-[16px]">Last Month</div>
            )}
          </div>
          <div className="self-stretch relative h-[37px] overflow-hidden shrink-0">
            <div className="absolute top-[12px] left-[16px]">Last Year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant;
