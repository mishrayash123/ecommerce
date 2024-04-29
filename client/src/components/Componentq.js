import { useMemo } from "react";

const Component = ({ propTop, propLeft }) => {
  const component2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[531px] left-[100px] flex flex-col items-start justify-start text-left text-xl text-black font-made-tommy"
      style={component2Style}
    >
      <div className="w-[919px] bg-white box-border h-[69px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[22px] px-10 relative gap-[707px] border-[1px] border-solid border-black">
        <div className="w-28 absolute !m-[0] top-[22px] left-[40px] inline-block z-[0]">
          Pay with UPI
        </div>
        <div className="w-5 absolute !m-[0] top-[24.5px] left-[859px] rounded-2xs box-border h-5 overflow-hidden shrink-0 z-[1] border-[2px] border-solid border-silver-200" />
      </div>
      <div className="w-[920px] bg-white box-border h-[69px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[22px] px-10 relative gap-[758px] border-[1px] border-solid border-black">
        <div className="w-[66px] absolute !m-[0] top-[22px] left-[40px] inline-block z-[0]">
          Wallets
        </div>
        <img
          className="w-4 absolute !m-[0] top-[30.5px] left-[864px] rounded-12xs h-2 z-[1]"
          alt=""
          src="/vector-142q.svg"
        />
      </div>
      <div className="w-[920px] bg-white box-border h-[69px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[22px] px-10 relative gap-[758px] border-[1px] border-solid border-black">
        <div className="w-[182px] absolute !m-[0] top-[22px] left-[40px] inline-block z-[0]">{`Credit & Debit Card`}</div>
        <img
          className="w-4 absolute !m-[0] top-[30.5px] left-[864px] rounded-12xs h-2 z-[1]"
          alt=""
          src="/vector-142q.svg"
        />
      </div>
    </div>
  );
};

export default Component;
