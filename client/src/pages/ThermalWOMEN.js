import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import { Link } from 'react-router-dom';


const ThermalWOMEN = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Sorting Options");
  const [products, setproducts] = useState([]);
  const nav = useNavigate();




  const fetchData = async () => {
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
        setproducts(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {

    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className=" bg-white text-dimgray-600 font-poppins">
<MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
      {/***************************main image starts here **************************************/}


      <div className="relative">
        {/*************************** Main Image ***************************/}
        <img
          className="mt-20 w-full h-auto md:aspect-w-16 md:aspect-h-9 object-cover"
          alt="main image"
          src="/image-29@2x.png"
        />

        {/***************** side navigation component *************************/}
        <div className="absolute top-20 right-0 flex rounded-t-none justify-between flex-row w-auto   lg:text-9xl  md:font-bold text-white md:text-4xl text-sm  font-made-tommy ">
          <Link to="/thermal-men" className="no-underline text-white">
            <div className="md:p-4 bg-yellow-400 rounded-bl-11xl p-1  ">MEN</div>
          </Link>
          <Link to="/thermal-women" className=" p-1 md:p-4 bg-salmon-100 no-underline text-white">
            <div>WOMEN </div>
          </Link>
        </div>



      </div>
    
      {/***************************main image ends here **************************************/}

      {/* here is the scrollable dots  */}

      <div className=" bg-[#d5d1d1]  md:w-1/6  w-1/5 py-1 md:px-4 px-2  justify-between text-center rounded-2xl mx-auto mb-10 mt-12 flex flex-row">
        <span className="h-2 w-2 md:h-4 md:w-4  py-auto rounded-full bg-black"> </span>
        <span className="md:w-[16px]  md:h-[16px] w-2 h-2 relative rounded-[50%] box-border border-[3px] border-solid border-gray-900" ></span>
        <span className="h-2 w-2 md:h-4 md:w-4  py-auto rounded-full bg-black"></span>
        <span className="h-2 w-2 md:h-4 md:w-4   py-auto rounded-full bg-black"></span>
        <span className="h-2 w-2 md:h-4 md:w-4   py-auto rounded-full bg-black"></span>

      </div>
      {/* *********************scrollable dots  ends *********************/}




      {/******************************** title of the page ********************** */}

      <div className='flex flex-row mb-10  w-[95%]  md:w-full items-start justify-center'>
        <div className='hidden md:inline-block'></div>
        <div className='flex items-end flex-col'>
          <div className=" p-3 text-dimgray-300">
            Home / Thermal
          </div>

          <div className=" flex  justify-between flex-col md:flex-row">
            <div className="text-xl  pl-2 md:pr-3 text-black">
              Women
            </div>
            <div className=" rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] text-dimgray-300 border-[1px] border-solid border-darkgray-100">
              <span className="relative">All Thermal wear</span>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                alt=""
                src="/phx.svg"
              />
            </div>
          </div>
        </div>

        {/**************************** here is sorting option  **********************/}

        <div
          className="rounded-lg bg-whitesmoke-200  mt-5 md:ml-20 flex items-center justify-between px-2 md:px-4 py-2 text-lg text-black font-made-tommy border border-solid border-gray-500 w-64 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="relative">{selectedOption}</div>
          <div className="ml-auto">
            <svg
              className={`w-5 h-5 transition-transform transform ${showDropdown ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 11-1.414 1.414L10 5.414 4.707 10.707A1 1 0 113.293 9.293l6-6A1 1 0 0110 3z" clipRule="evenodd" />
            </svg>
          </div>
          {showDropdown && (
            <div className="absolute mt-2 w-64 bg-white shadow-md rounded-md z-10">
              <div className="py-2">
                <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Select Sorting Options")}>Select Sorting Options</div>
                <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Price- Low to High")}>Price- Low to High</div>
                <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Price- High to Low")}>Price- High to Low</div>
                <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Newest")}>Newest</div>
                <div className="cursor-pointer hover:bg-gray-100 px-4 py-2" onClick={() => handleOptionClick("Popularity")}>Popularity</div>
              </div>
            </div>
          )}
        </div>


      </div>

      {/****************************  sorting option ends  **********************/}



      <div className='flex flex-col md:flex-row'>
        {/****************************  filtering component named products , sizes and prices **********************/}

        <div className='flex md:w-[30%] flex-col'>

        
          <div>
            <FrameComponent5
              overSizedTShirt="Activewear"
              allTShirt="All thermal"
              menFullSleeveTShirts="Women Base Layer"
              hoodedTShirts="Women Activewear"
              jackets="all thermal wear"
              dropCutTShirts="short thermal"
              easyFitFullSleeveTShirt="Easy Fit thermal"
            />
          </div>


          <div className='mb-3'>
            <FrameComponent3 />
          </div>

          <div className='mb-3'>
            <FrameComponent4 />
          </div>


        </div>








        {/******************************* code with filter ****************************************** */}
        <div className="grid grid-cols-1 md:w-[72%] mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-5 md:gap-10 lg:gap-9 ">
          {products.filter((e)=>(e.category==="ThermalWOMEN")).filter((e)=>(e.gender==="Female")).map((product) => (
            <a
              key={product._id}
              href=''
              className="no-underline"
              onClick={(e) => {
                e.preventDefault();
                nav('/material-page', { state: { id: product._id } });
              }}
            >
              <div className="font-inter md:ml-2 lg:ml-0 relative">
                <div className="w-full lg:w-[95%] rounded-br-[135px] mt-2 rounded-bl-xl rounded-t-xl shadow-dimgray-600 shadow-lg relative">
                  <img
                    className="w-full h-[300px] object-cover rounded-t-xl"
                    alt=""
                    src={product.image1}
                  />
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
                      className="rounded-full w-[100px] h-[100px] overflow-hidden absolute bottom-0 right-0   m-[-12px] "
                      alt=""
                      src="/solarbagoutline6.svg"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/******************** footer ***************************/}
      <div className="mt-auto ">
        <FrameComponent1
          frame10="/frame-10.svg"
          frame11="/frame-11.svg"
          frame12="/frame-12.svg"
          frame14="/frame-14.svg"
          propBackgroundColor="salmon"
          propBackgroundColor1="whitesmoke"
          propBackgroundColor2="salmon"
        />
      </div>
    </div>
  );
};

export default ThermalWOMEN;