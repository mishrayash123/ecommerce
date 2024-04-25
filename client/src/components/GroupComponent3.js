import { useMemo } from "react";

const GroupComponent3 = ({
  image3,
  musicRoundedMenTshirt,
  prop,
  solarbagOutline,
  propTop,
  propHeight,
}) => {
  const image3IconStyle = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div className="absolute top-[946px] left-[898px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mingcuteupfill.svg"
        />
        <img
          className="absolute top-[-71px] left-[calc(50%_-_175px)] w-[349px] h-[477px] object-cover"
          alt=""
          src={image3}
          style={image3IconStyle}
        />
        <div className="absolute top-[430px] left-[15px] text-5xl font-semibold text-black">
          Chinos
        </div>
        <div className="absolute top-[469px] left-[15px]">
          {musicRoundedMenTshirt}
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
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src={solarbagOutline}
      />
    </div>
  );
};

export default GroupComponent3;
