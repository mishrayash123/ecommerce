import { useMemo } from "react";

const Property1Frame2 = ({ frameDivTop, frameDivLeft }) => {
  const property1Frame66Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  return (
    <div
      className="absolute top-[20px] left-[20px] flex flex-col items-start justify-start text-left text-xl text-dimgray-400 font-inter"
      style={property1Frame66Style}
    >
      <div className="w-[750px] bg-white box-border h-[60px] flex flex-row items-center justify-center py-[18px] px-2.5 relative gap-[10px] border-[1px] border-solid border-darkgray-600">
        <div className="w-[194px] absolute !m-[0] top-[18px] left-[30px] font-semibold inline-block z-[0]">
          Product Description
        </div>
        <img
          className="w-[13px] absolute !m-[0] top-[calc(50%_-_3px)] left-[695px] h-1.5 z-[1]"
          alt=""
          src="/vector-132.svg"
        />
      </div>
      <div className="w-[750px] bg-white box-border h-[60px] flex flex-row items-center justify-center py-[18px] px-2.5 relative gap-[10px] border-r-[1px] border-solid border-darkgray-600 border-b-[1px] border-l-[1px]">
        <div className="w-[149px] absolute !m-[0] top-[18px] left-[30px] font-semibold inline-block z-[0]">
          Product Details
        </div>
        <img
          className="w-[13px] absolute !m-[0] top-[calc(50%_-_3px)] left-[695px] h-1.5 z-[1]"
          alt=""
          src="/vector-132.svg"
        />
      </div>
    </div>
  );
};

export default Property1Frame2;
