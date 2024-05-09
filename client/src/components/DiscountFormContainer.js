import { useMemo } from "react";

const DiscountFormContainer = ({ propTop }) => {
  const frameDiv12Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[451px] left-[1050px] box-border w-[459px] h-[244px] overflow-hidden text-left text-lg text-darkslategray-100 font-inter border-[1px] border-solid border-darkgray-400"
      style={frameDiv12Style}
    >
      <img
        className="absolute top-[123.5px] left-[0.5px] max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
      />
      <img
        className="absolute top-[183.5px] left-[0.5px] max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
      />
      <div className="absolute top-[82px] left-[23px] text-salmon-100">
        Discount
      </div>
      <div className="absolute top-[142px] left-[23px] text-black">
        Shipping Charges
      </div>
      <div className="absolute top-[202px] left-[23px] font-semibold">
        TOTAL AMOUNT
      </div>
      <b className="absolute top-[205px] left-[363px] text-base">₹599</b>
      <div className="absolute top-[145px] left-[384px] text-base">₹0</div>
      <img
        className="absolute top-[63.5px] left-[0.5px] max-h-full w-[528px]"
        alt=""
        src="/vector-20.svg"
      />
      <div className="absolute top-[85px] left-[360px] text-base text-salmon-100">
        -₹100
      </div>
      <div className="absolute top-[30px] left-[365px] text-base">₹699</div>
      <div className="absolute top-[22px] left-[23px] text-black">
        <span>Cart Total </span>
        <span className="text-base">(Excl. of all taxes)</span>
      </div>
    </div>
  );
};

export default DiscountFormContainer;
