import { useMemo } from "react";

const GroupComponent10 = ({ propTop }) => {
  const groupDiv6Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[946px] left-[898px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter"
      style={groupDiv6Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mingcuteupfill.svg"
        />
        <img
          className="absolute top-[calc(50%_-_204px)] left-[calc(50%_-_142px)] w-[284px] h-[229px] object-cover"
          alt=""
          src="/image-39@2x.png"
        />
        <div className="absolute top-[430px] left-[15px] text-5xl font-semibold text-black">
          Chinos
        </div>
        <div className="absolute top-[469px] left-[15px]">
          Artcart men handkerchief
        </div>
        <img
          className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
          alt=""
          src="/vector-13.svg"
        />
        <div className="absolute top-[498px] left-[15px] font-semibold">
          ₹899
        </div>
        <div className="absolute top-[528px] left-[16px] text-2xs">
          MRP incl. of all taxes
        </div>
        <div className="absolute top-[-2px] left-[227px] bg-white w-32 h-[392px] hidden" />
        <div className="absolute top-[301px] left-[0px] bg-white w-[349px] h-[89px]" />
        <div className="absolute top-[0px] left-[0px] bg-white w-[349px] h-[72px]" />
        <div className="absolute top-[-2px] left-[-3px] bg-white w-[76px] h-[392px] hidden" />
        <div className="absolute top-[25px] right-[-349px] bg-white w-[349px] h-8 [transform:_rotate(90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[25px] left-[32px] bg-white w-[349px] h-8 [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src="/solarbagoutline.svg"
      />
    </div>
  );
};

export default GroupComponent10;
