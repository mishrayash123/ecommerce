import { useMemo } from "react";

const FrameComponent4 = ({ propTop, propHeight }) => {
  const frameDiv10Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div
      className="absolute top-[1716px] left-[25px] shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[412px] h-[371px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500"
      style={frameDiv10Style}
    >
      <div className="absolute top-[78px] left-[calc(50%_-_179px)] rounded-6xs bg-whitesmoke-200 box-border w-[359px] h-10 flex flex-row items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver">
        <div className="w-[131px] absolute !m-[0] top-[calc(50%_-_11px)] left-[20.5px] inline-block z-[0]">
          Search for Price
        </div>
      </div>
      <div className="absolute top-[159px] left-[58px]">
        Rs. 774 To Rs. 1248
      </div>
      <div className="absolute top-[129px] left-[58px]">Rs. 299 To Rs. 773</div>
      <div className="absolute top-[28px] left-[27px] text-7xl tracking-[0.02em] font-medium">
        PRICES
      </div>
      <div className="absolute top-[189px] left-[58px]">
        Rs. 1249 To Rs. 1723
      </div>
      <div className="absolute top-[219px] left-[58px]">
        Rs. 1724 To Rs. 2199
      </div>
      <div className="absolute top-[160px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-20xl box-border w-[21px] h-[21px] overflow-hidden border-[1px] border-solid border-salmon-100">
        <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_7.5px)] rounded-20xl bg-salmon-100 w-[15px] h-[15px] overflow-hidden" />
      </div>
      <div className="absolute top-[130px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-20xl bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_7.5px)] w-4 h-4 overflow-hidden" />
      </div>
      <div className="absolute top-[190px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-20xl bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
      <div className="absolute top-[220px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-20xl bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
    </div>
  );
};

export default FrameComponent4;
