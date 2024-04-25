import { useMemo } from "react";

const FrameComponent7 = ({
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  prop7,
  propTop,
  propWidth,
  propLeft,
  propWidth1,
  propLeft1,
  propWidth2,
  propLeft2,
  propWidth3,
  propLeft3,
  propWidth4,
  propLeft4,
  propWidth5,
  propLeft5,
  propWidth6,
  propLeft6,
  propWidth7,
  propLeft7,
}) => {
  const frameDiv11Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const div2Style = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft,
    };
  }, [propWidth, propLeft]);

  const div3Style = useMemo(() => {
    return {
      width: propWidth1,
      left: propLeft1,
    };
  }, [propWidth1, propLeft1]);

  const div4Style = useMemo(() => {
    return {
      width: propWidth2,
      left: propLeft2,
    };
  }, [propWidth2, propLeft2]);

  const div5Style = useMemo(() => {
    return {
      width: propWidth3,
      left: propLeft3,
    };
  }, [propWidth3, propLeft3]);

  const div6Style = useMemo(() => {
    return {
      width: propWidth4,
      left: propLeft4,
    };
  }, [propWidth4, propLeft4]);

  const div7Style = useMemo(() => {
    return {
      width: propWidth5,
      left: propLeft5,
    };
  }, [propWidth5, propLeft5]);

  const div8Style = useMemo(() => {
    return {
      width: propWidth6,
      left: propLeft6,
    };
  }, [propWidth6, propLeft6]);

  const div9Style = useMemo(() => {
    return {
      width: propWidth7,
      left: propLeft7,
    };
  }, [propWidth7, propLeft7]);

  return (
    <div
      className="absolute top-[1376px] left-[25px] shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[412px] h-[419px] overflow-hidden text-left text-lg text-dimgray-700 font-made-tommy border-[0.7px] border-solid border-darkgray-500"
      style={frameDiv11Style}
    >
      <div className="absolute top-[78px] left-[calc(50%_-_179px)] rounded-6xs bg-whitesmoke-200 box-border w-[359px] h-10 flex flex-row items-center justify-center p-2.5 text-darkgray-400 border-[0.7px] border-solid border-silver">
        <div className="w-[123px] absolute !m-[0] top-[calc(50%_-_11px)] left-[20.5px] inline-block z-[0]">
          Search for Size
        </div>
      </div>
      <div className="absolute top-[145px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-[33px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_16px)] inline-block z-[0]">
          XXS
        </div>
      </div>
      <div className="absolute top-[200px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-[9px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_4px)] inline-block z-[0]">
          L
        </div>
      </div>
      <div className="absolute top-[255px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]"
          style={div2Style}
        >
          {prop}
        </div>
      </div>
      <div className="absolute top-[310px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]"
          style={div3Style}
        >
          {prop1}
        </div>
      </div>
      <div className="absolute top-[145px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]">
          XS
        </div>
      </div>
      <div className="absolute top-[200px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]">
          XL
        </div>
      </div>
      <div className="absolute top-[255px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[22px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_11px)] inline-block z-[0]"
          style={div4Style}
        >
          {prop2}
        </div>
      </div>
      <div className="absolute top-[310px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]"
          style={div5Style}
        >
          {prop3}
        </div>
      </div>
      <div className="absolute top-[145px] left-[218px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-[11px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_5px)] inline-block z-[0]">
          S
        </div>
      </div>
      <div className="absolute top-[200px] left-[218px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-8 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_16px)] inline-block z-[0]">
          XXL
        </div>
      </div>
      <div className="absolute top-[255px] left-[218px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-5 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]"
          style={div6Style}
        >
          {prop4}
        </div>
      </div>
      <div className="absolute top-[310px] left-[218px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[23px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_11px)] inline-block z-[0]"
          style={div7Style}
        >
          {prop5}
        </div>
      </div>
      <div className="absolute top-[145px] left-[308px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-4 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_8px)] inline-block z-[0]">
          M
        </div>
      </div>
      <div className="absolute top-[200px] left-[308px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div className="w-[43px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_21px)] inline-block z-[0]">
          XXXL
        </div>
      </div>
      <div className="absolute top-[255px] left-[308px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[22px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_11px)] inline-block z-[0]"
          style={div8Style}
        >
          {prop6}
        </div>
      </div>
      <div className="absolute top-[310px] left-[308px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
        <div
          className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]"
          style={div9Style}
        >
          {prop7}
        </div>
      </div>
      <div className="absolute top-[28px] left-[27px] text-7xl tracking-[0.02em] font-medium font-poppins text-black">
        SIZE
      </div>
    </div>
  );
};

export default FrameComponent7;
