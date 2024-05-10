import { useMemo } from "react";
import { Link } from 'react-router-dom';

const Header = ({
  solarbagOutline,
  basilnotificationOutline,
  codiconaccount,
  ionsearch,
  propLeft,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propColor1,
  propColor2,
  propBackgroundColor2,
  propTop,
  propTop1,
  propTop2,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
    };
  }, [propLeft, propBackgroundColor]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const whatAreYouStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const trackOrderStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const contactUsStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const frameDiv3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const vectorIconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const vectorIcon1Style = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const vectorIcon2Style = useMemo(() => {
    return {
      top: propTop2,
    };
  }, [propTop2]);

  return (
    <div
      className="absolute top-[0px] left-[calc(50%_-_864px)] bg-sandybrown w-[1728px] h-[89px] overflow-hidden text-left text-xl text-black font-made-tommy"
      style={frameDiv1Style}
    >
       <Link to="/wishlist-page1" style={{ textDecoration: 'none', color: 'inherit' }}>
       <img
        className="absolute top-[27px] left-[1566px] w-[35px] h-[35px] overflow-hidden"
        alt=""
        src={solarbagOutline}
      />
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img
        className="absolute top-[27px] left-[1500px] rounded-45xl w-[35px] h-[35px] overflow-hidden"
        alt=""
        src="/codiconaccount2.svg"
      />
          </Link>
      <div
        className="absolute top-[calc(50%_-_25.5px)] left-[calc(50%_+_6px)] rounded-3xl bg-palegoldenrod w-[334px] h-[51px] overflow-hidden text-base text-gray-300 font-inter"
        style={frameDiv2Style}
      >
        <img
          className="absolute top-[calc(50%_-_13.5px)] left-[25px] w-[26px] h-[26px] overflow-hidden"
          alt=""
          src={ionsearch}
        />
        <div
          className="absolute top-[calc(50%_-_9.5px)] left-[75px] font-semibold"
          style={whatAreYouStyle}
        >
          What are you looking for?
        </div>
      </div>
      <div
        className="absolute top-[30px] left-[1246px]"
        style={trackOrderStyle}
      >
        <Link to="/trackorder" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Track Order</b>
          </Link>
      </div>
      <div className="absolute top-[30px] left-[1379px]" style={contactUsStyle}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Contact Us</b>
          </Link>
      </div>
      <div
        className="absolute top-[-1px] left-[0px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-br-51xl rounded-bl-none bg-salmon-100 w-[870px] h-[89px] overflow-hidden text-5xl text-white"
        style={frameDiv3Style}
      >
        <div className="absolute top-[30px] left-[351px] flex flex-row items-start justify-start">
        <Link to="/undergarments-men-women" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Undergarments</b>
          </Link>
        </div>
        <div className="absolute top-[30px] left-[155px] flex flex-row items-start justify-start gap-[5px] text-center">
        <Link to="/readymade-tshirt-men-page" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Readymade</b>
          </Link>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/mingcutedownfill.svg"
          />
        </div>
        <div className="absolute top-[30px] left-[571px] flex flex-row items-start justify-start">
        <Link to="/thermal-men" style={{ textDecoration: 'none', color: 'inherit' }}>
    <b className="relative">Thermal</b>
  </Link>
        </div>
        <div className="absolute top-[30px] left-[705px] flex flex-row items-center justify-start gap-[5px] text-center">
        <Link to="/accessories-hanky" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Accessories</b>
          </Link>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/mingcutedownfill.svg"
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[335px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIconStyle}
        />
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[552px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIcon1Style}
        />
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[688px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIcon2Style}
        />
      </div>
    </div>
  );
};

export default Header;
