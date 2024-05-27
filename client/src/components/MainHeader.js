import { useMemo, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";


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
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoggedIn } = useAuth();
  const [searchResults, setSearchResults] = useState([]);
  const nav = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReadymadeDropdownOpen, setIsReadymadeDropdownOpen] = useState(false);
  const [isAccessoriesDropdownOpen, setIsAccessoriesDropdownOpen] = useState(false);
  const [isUndergarmentsDropdownOpen, setIsUndergarmentsDropdownOpen] = useState(false);
  const [isThermalDropdownOpen, setIsThermalDropdownOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://ecommercebackend-32ve.onrender.com/getproducts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleaddtowishlist = async (productid, title, color, gender, size, price, description, details, category, subcategory, subcategory1, image1, image2, image3, image4) => {
    try {
      const response = await fetch("https://ecommercebackend-32ve.onrender.com/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid, productid, title, color, gender, size, price, description, details, category, subcategory, subcategory1, image1, image2, image3, image4
        }),
      });

      if (response.ok) {
        alert("Added to wishlist");
      } else {
        alert("Already in wishlist");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) &&
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <div className="bg-sandybrown flex md:justify-between h-[89px] overflow-hidden text-xl text-black font-made-tommy">
        <div></div>
        <div className="flex items-center">


          <div className=" md:w-[334px] flex flex-row sm:h-[51px] h-[30px] rounded-3xl w-full content-center bg-palegoldenrod">
            <img className=" sm:pt-3 sm:w-[25px] sm:h-[25px] mr:pr-1  overflow-hidden" alt="search" src="/ionsearch.svg" />
            <input
              className=" placeholder:font-semibold  rounded-3xl  w-fit overflow-hidden  outline-none font-made-tommy sm:text-xl bg-palegoldenrod placeholder:text-gray-300"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="What are you looking for ?"
            />
            {searchQuery && (
              <button
                className="focus:outline-none overflow-hidden rounded-3xl text-black bg-palegoldenrod"
                onClick={clearSearch}
              >
                X
              </button>
            )}
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
              <button className="mb-4 w-4 text-xl bg-transparent" onClick={() => setIsMenuOpen(false)}>
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

      {/* new code for search bar implementation */}
      <div className="flex  lg:gap-2 gap-2 flex-wrap justify-around">

        {searchQuery && searchResults.length > 0 ? (

          searchResults.map((product) => (
            <div className=" h-fit rounded-br-[135px] mt-2 mb-3 rounded-bl-xl shadow-dimgray-600 shadow-lg relative">
              <a
                key={product._id}
                href=''
                className="no-underline"
                onClick={(e) => {
                  e.preventDefault();
                  nav('/material-page', { state: { id: product._id } });
                }}
              >
                <img
                  className="w-full h-[300px] object-cover rounded-t-xl"
                  alt=""
                  src={product.image1}
                />
              </a>
              <div className="mt-0 rounded-br-[135px] rounded-bl-xl shadow-dimgray-600 shadow-lg bg-bisque h-full">
                <div className="font-sans text-black text-xl font-bold pt-5 pb-3 pl-2">
                  {product.title}
                </div>
                <div className="font-semibold pl-2 text-gray-500 pb-4">
                  ₹{product.price}
                </div>
                <img
                  className="pl-3 max-h-full w-[80%]"
                  alt=""
                  src="/vector-13.svg"
                />
                <div className="text-xs text-gray-500 pb-2 pl-2 mt-1">
                  MRP incl. of all taxes
                </div>

                <img
                  className="rounded-full w-[100px] h-[100px] overflow-hidden absolute bottom-0 right-0   m-[-12px] cursor-pointer"
                  alt=""
                  src="/solarbagoutline6.svg"
                  onClick={() => {
                    handleaddtowishlist(product._id, product.title, product.color, product.gender, product.size, product.price, product.description, product.details, product.category, product.subcategory, product.subcategory1, product.image1, product.image2, product.image3, product.image4);
                  }}
                />
              </div>

            </div>

          ))
        ) : null}
      </div>
    </>
  );
};

export default Header;