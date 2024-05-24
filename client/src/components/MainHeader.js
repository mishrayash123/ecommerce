import { useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../AuthContext";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReadymadeDropdownOpen, setIsReadymadeDropdownOpen] = useState(false);
  const [isAccessoriesDropdownOpen, setIsAccessoriesDropdownOpen] = useState(false);
  const [isUndergarmentsDropdownOpen, setIsUndergarmentsDropdownOpen] = useState(false);
  const [isThermalDropdownOpen, setIsThermalDropdownOpen] = useState(false);

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

  const { isLoggedIn } = useAuth();

  return (
    <div className="bg-sandybrown flex md:justify-between h-[89px] overflow-hidden text-xl text-black font-made-tommy">
      <div></div>
      <div className="flex items-center">
        <div className="flex mt-4 md:mt-0">
          <div className="rounded-3xl bg-palegoldenrod w-full md:w-[334px] h-[51px] overflow-hidden flex items-center space-x-2 px-2">
            <img className="w-[26px] h-[26px] overflow-hidden" alt="search" src={ionsearch} />
            <div className="font-semibold text-gray-300">What are you looking for?</div>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex flex-grow items-center justify-center md:justify-end">
            <div className="hidden md:flex space-x-4">
              <Link to="/wishlist-page1" style={{ textDecoration: 'none', color: 'inherit' }}>
                <b>Your wishlist</b>
              </Link>
              {isLoggedIn ? (
                <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img className="rounded-45xl w-[35px] h-[35px] overflow-hidden" alt="profile" src="/codiconaccount2.svg" />
                </Link>
              ) : (
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <b>Sign in</b>
                </Link>
              )}
            </div>
          </div>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img className="w-[35px] h-[35px] overflow-hidden" alt="cart" src={solarbagOutline} />
          </Link>
          <div className="xl:hidden block">
            <button onClick={() => setIsMenuOpen(true)} className="bg-transparent">
              <p className="block w-6 h-px bg-black "></p>
              <p className="block w-6 h-px bg-black "></p>
              <p className="block w-6 h-px bg-black"></p>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-black bg-opacity-30 z-10" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed flex flex-col top-0 right-0 w-2/3 h-full bg-[#FF6868] text-white p-4 space-y-4 z-20" onClick={(e) => e.stopPropagation()}>
            <button className="mb-4 text-xl bg-transparent" onClick={() => setIsMenuOpen(false)}>
              &#10005;
            </button>
            <Link to="/wishlist-page1" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMenuOpen(false)}>
              <b>Your wishlist</b>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMenuOpen(false)}>
              <b>Home</b>
            </Link>
            <Link to="#" onClick={() => setIsUndergarmentsDropdownOpen(!isUndergarmentsDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="relative">Undergarments</b>
              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
            </Link>
            {isUndergarmentsDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link to="/undergarments-men-women1" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Men
                </Link>
                <Link to="/undergarments-men-women" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Women
                </Link>
              </div>
            )}
            <Link to="#" onClick={() => setIsReadymadeDropdownOpen(!isReadymadeDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="relative">Readymade</b>
              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
            </Link>
            {isReadymadeDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link to="/readymade-tshirt-men-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Men
                </Link>
                <Link to="/readymade-tshirt-women-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Women
                </Link>
                <Link to="/readymade-kids-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Kids
                </Link>
                <Link to="/readymade-lower-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Lower
                </Link>
              </div>
            )}
            <Link to="#" onClick={() => setIsThermalDropdownOpen(!isThermalDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="relative">Thermal</b>
              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
            </Link>
            {isThermalDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link to="/thermal-men" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Men
                </Link>
                <Link to="/thermal-women" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Women
                </Link>
              </div>
            )}
            <Link to="#" onClick={() => setIsAccessoriesDropdownOpen(!isAccessoriesDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="relative">Accessories</b>
              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
            </Link>
            {isAccessoriesDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link to="/accessories-socks" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Socks
                </Link>
                <Link to="/accessories-arm-sleeves" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Arm Sleeves
                </Link>
                <Link to="/accessories-hanky" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Hanky
                </Link>
              </div>
            )}
            {isLoggedIn ? (
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMenuOpen(false)}>
                <img className="rounded-45xl w-[35px] h-[35px] overflow-hidden" alt="profile" src="/codiconaccount2.svg" />
              </Link>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMenuOpen(false)}>
                <b>Sign in</b>
              </Link>
            )}
          </div>
        </div>
      )}

      <div
        className="absolute top-[-1px] left-[0px] hidden xl:block shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-br-51xl rounded-bl-none bg-salmon-100 w-[870px] h-[89px] overflow-visible text-5xl text-white"
        style={frameDiv3Style}
      >
        <div className="absolute top-[30px] left-[24px] flex flex-row items-start justify-start">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <b>Home</b>
          </Link>
        </div>
        <div className="absolute top-[30px] left-[351px] flex flex-row items-start justify-start gap-[5px] text-center overflow-visible z-40">
          <Link to="#" onClick={() => setIsUndergarmentsDropdownOpen(!isUndergarmentsDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
            <b className="relative">Undergarments</b>
            <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
          </Link>
          {isUndergarmentsDropdownOpen && (
            <div className="absolute top-[40px] left-0 bg-white text-black w-[200px] shadow-md rounded-md z-50">
              <Link to="/undergarments-men-women1" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Men
              </Link>
              <Link to="/undergarments-men-women" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Women
              </Link>
            </div>
          )}
        </div>
        <div className="absolute top-[30px] left-[155px] flex flex-row items-start justify-start gap-[5px] text-center  overflow-visible z-40">
          <Link to="#" onClick={() => setIsReadymadeDropdownOpen(!isReadymadeDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
            <b className="relative">Readymade</b>
            <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
          </Link>
          {isReadymadeDropdownOpen && (
            <div className="absolute top-[40px] left-0 bg-white text-black w-[200px] shadow-md rounded-md z-50">
              <Link to="/readymade-tshirt-men-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Men
              </Link>
              <Link to="/readymade-tshirt-women-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Women
              </Link>
              <Link to="/readymade-kids-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Kids
              </Link>
              <Link to="/readymade-lower-page" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Lower
              </Link>
            </div>
          )}
        </div>
        <div className="absolute top-[30px] left-[571px] flex flex-row items-start justify-start gap-[5px] text-center overflow-visible z-40">
          <Link to="#" onClick={() => setIsThermalDropdownOpen(!isThermalDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
            <b className="relative">Thermal</b>
            <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
          </Link>
          {isThermalDropdownOpen && (
            <div className="absolute top-[40px] left-0 bg-white text-black w-[200px] shadow-md rounded-md z-50">
              <Link to="/thermal-men" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Men
              </Link>
              <Link to="/thermal-women" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Women
              </Link>
            </div>
          )}
        </div>
        <div className="absolute top-[30px] left-[705px] flex flex-row items-center justify-start gap-[5px] text-center z-40">
          <Link to="#" onClick={() => setIsAccessoriesDropdownOpen(!isAccessoriesDropdownOpen)} style={{ textDecoration: 'none', color: 'inherit' }}>
            <b className="relative">Accessories</b>
            <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/mingcutedownfill.svg" />
          </Link>
          {isAccessoriesDropdownOpen && (
            <div className="absolute z-50 top-[40px] left-0 bg-white text-black w-[200px] shadow-md rounded-md">
              <Link to="/accessories-socks" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Socks
              </Link>
              <Link to="/accessories-arm-sleeves" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Arm Sleeves
              </Link>
              <Link to="/accessories-hanky" className="block px-4 py-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                Hanky
              </Link>
            </div>
          )}
        </div>
        <img
          className="absolute top-[calc(50%_-_22.5px)] left-[120px] max-w-full overflow-hidden h-[47px]"
          alt=""
          src="/vector-3.svg"
          style={vectorIconStyle}
        />
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

