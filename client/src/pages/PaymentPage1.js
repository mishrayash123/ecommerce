import { useState, useCallback } from "react";
import Frame from "../components/Frameq";
import PortalPopup from "../components/PortalPopupq";
import MainHeader from "../components/MainHeader";

import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent3 from "../components/FrameComponent3q";
import FrameComponent2 from "../components/FrameComponent2q";
import Component from "../components/Componentq";

const PaymentPage1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-white h-[1776px] overflow-hidden text-left text-base text-white font-inter">
      <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
        <FrameComponent5 />
        <div className="absolute top-[161px] left-[564px] rounded-11xl bg-salmon flex flex-row items-center justify-center py-2.5 px-8">
          <div className="relative font-semibold">MY BAG</div>
        </div>
        <div className="absolute top-[161px] left-[826px] rounded-11xl bg-salmon flex flex-row items-center justify-center py-2.5 px-8">
          <div className="relative font-semibold">ADDRESS</div>
        </div>
        <div className="absolute top-[161px] left-[1100px] rounded-11xl bg-salmon flex flex-row items-center justify-center py-2.5 px-8">
          <div className="relative font-semibold">PAYMENT</div>
        </div>
        <img
          className="absolute top-[180.5px] left-[704.5px] max-h-full w-[109px]"
          alt=""
          src="/vector-141q.svg"
        />
        <img
          className="absolute top-[180.5px] left-[979.5px] max-h-full w-[109px]"
          alt=""
          src="/vector-141q.svg"
        />
        <div className="absolute top-[309px] left-[1115px] text-xl text-gray-400">
          BILLING DETAILS
        </div>
        <div
          className="absolute top-[668px] left-[1115px] rounded-md bg-salmon flex flex-row items-center justify-center py-2.5 px-[127.5px] cursor-pointer text-5xl font-made-tommy"
          onClick={openFrame}
        >
          <b className="relative">CONTINUE TO PAYMENT</b>
        </div>
        <FrameComponent3 />
        <FrameComponent2 />
        <div className="absolute top-[448px] left-[87px] text-xl font-semibold text-salmon">
          Payment Options
        </div>
        <Component propTop="531px" propLeft="100px" />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default PaymentPage1;
