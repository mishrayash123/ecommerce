import { useMemo } from "react";

const GroupComponent9 = ({ propTop }) => {
  const groupDiv7Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[946px] left-[1298px] shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] text-left text-base text-dimgray-600 font-inter"
      style={groupDiv7Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
        <img
          className="absolute top-[229px] left-[179px] w-6 h-6 overflow-hidden"
          alt=""
          src="/mingcuteupfill.svg"
        />
        <img
          className="absolute top-[50px] left-[calc(50%_-_160px)] w-80 h-[284px] object-cover"
          alt=""
          src="/image-40@2x.png"
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
          ₹749
        </div>
        <div className="absolute top-[528px] left-[16px] text-2xs">
          MRP incl. of all taxes
        </div>
        <div className="absolute top-[320px] left-[0px] bg-white w-[348px] h-[70px]" />
        <div className="absolute top-[0px] left-[0px] bg-white w-[348px] h-14" />
        <div className="absolute top-[347px] left-[-5px] bg-white w-[312px] h-5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <div className="absolute top-[341px] left-[334px] bg-white w-[312px] h-3.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      </div>
      <img
        className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
        alt=""
        src="/solarbagoutline.svg"
      />
    </div>
  );
};

export default GroupComponent9;
