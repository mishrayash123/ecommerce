import { useMemo } from "react";

const GroupComponent11 = ({ propTop }) => {
  const groupDiv5Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[946px] left-[503px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter"
      style={groupDiv5Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <div className="absolute top-[430px] left-[15px] text-5xl font-semibold text-black">
          POLOS
        </div>
        <div className="absolute top-[469px] left-[15px]">
          Handkerchief, Face Hanky
        </div>
        <img
          className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
          alt=""
          src="/vector-13.svg"
        />
        <div className="absolute top-[498px] left-[15px] font-semibold">
          ₹245
        </div>
        <div className="absolute top-[528px] left-[16px] text-2xs">
          MRP incl. of all taxes
        </div>
        <div className="absolute top-[-2px] left-[260px] bg-white w-24 h-[392px]" />
        <div className="absolute top-[-6px] left-[-4px] bg-white w-[283px] h-[76px]" />
        <img
          className="absolute top-[43px] left-[calc(50%_-_174px)] w-[347px] h-[347px] object-cover"
          alt=""
          src="/image-37@2x.png"
        />
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src="/solarbagoutline6.svg"
      />
    </div>
  );
};

export default GroupComponent11;
