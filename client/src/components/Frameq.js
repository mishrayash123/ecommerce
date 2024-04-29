import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/payment-page");
  }, [navigate]);

  const onMdicancelBoldIconClick = useCallback(() => {
    // Please sync "CART PAGE" to the project
  }, []);

  return (
    <div className="w-[1089px] relative rounded-[35px] bg-white box-border h-[730px] overflow-hidden max-w-full max-h-full text-left text-17xl text-limegreen-200 font-made-tommy border-[11px] border-solid border-salmon">
      <img
        className="absolute top-[133px] left-[calc(50%_-_69.5px)] w-[149px] h-[149px] overflow-hidden object-cover"
        alt=""
        src="/iconparksolidsuccess@2xq.png"
      />
      <div className="absolute h-[1.64%] w-[1.1%] top-[26.3%] right-[56.38%] bottom-[72.05%] left-[42.52%] rounded-[50%] bg-limegreen-200" />
      <div className="absolute h-[0.55%] w-[0.37%] top-[27.95%] right-[42.52%] bottom-[71.51%] left-[57.12%] rounded-[50%] bg-limegreen-200" />
      <div className="absolute top-[35.48%] left-[53.65%] [transform:_rotate(47.5deg)] [transform-origin:0_0]">
        +
      </div>
      <img
        className="absolute h-[3.29%] w-[2.2%] top-[16.58%] right-[54.45%] bottom-[80.14%] left-[43.34%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/materialsymbolsstarq.svg"
      />
      <div className="absolute top-[384px] left-[calc(50%_-_559.5px)] bg-salmon w-[1120px] h-[378px]" />
      <div
        className="absolute top-[604px] left-[calc(50%_-_216.5px)] rounded-md bg-white flex flex-row items-center justify-center py-2.5 px-[127.5px] cursor-pointer text-5xl text-salmon"
        onClick={onFrameContainer1Click}
      >
        <b className="relative">BACK TO HOME</b>
      </div>
      <b className="absolute top-[417px] left-[calc(50%_-_334.5px)] text-21xl inline-block font-poppins text-white text-center w-[670px]">
        Your Order has been Accepted
      </b>
      <b className="absolute top-[497px] left-[391px] text-base font-poppins text-whitesmoke-300 text-center">
        <p className="m-0">{`Your items has been placcd and is on `}</p>
        <p className="m-0">it’s way to being processed</p>
      </b>
      <div className="absolute top-[-107.4px] left-[1023.3px] bg-salmon w-[210px] h-[131.2px] [transform:_rotate(41deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[17px] left-[1027px] w-[41px] h-[41px] overflow-hidden cursor-pointer"
        alt=""
        src="/mdicancelboldq.svg"
        onClick={onMdicancelBoldIconClick}
      />
      <div className="absolute top-[98px] left-[600px] text-[45px]">+</div>
    </div>
  );
};

export default Frame;
