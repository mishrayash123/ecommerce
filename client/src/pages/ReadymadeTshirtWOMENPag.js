// import MainHeader from "../components/MainHeader";
// import ListboxComponent from "../components/ListboxComponent";
// import FrameComponent5 from "../components/FrameComponent5";
// import FrameComponent4 from "../components/FrameComponent4";
// import FrameComponent3 from "../components/FrameComponent3";
// import GroupComponent7 from "../components/GroupComponent7";
// import GroupComponent6 from "../components/GroupComponent6";
// import GroupComponent5 from "../components/GroupComponent5";
// import FrameComponent1 from "../components/FrameComponent1";
// import React, { useState,useEffect } from 'react';
// import {useNavigate} from 'react-router-dom'

// const ReadymadeTshirtWOMENPag = () => {
//   const [products, setproducts] = useState([]);
//   const nav = useNavigate();




//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://ecommercebackend-32ve.onrender.com/getproducts",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setproducts(data)
//         console.log(data)
//       } else {
//         alert("Something went wrong please login again");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   }

//   useEffect(() => {

//     fetchData();
//   }, []);
//   return (
//     <div className="w-full relative bg-white h-[2873px] overflow-hidden text-left text-base text-dimgray-300 font-poppins">
//       <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
//        <img
//         className="absolute top-[89px] left-[-80px] w-[2295px] h-[588px] object-cover"
//         alt=""
//         src="/image-7@2x.png"
//       />
//       <div className="absolute top-[89px] left-[1301px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-11xl bg-salmon-100 flex flex-row items-start justify-start gap-[10px] text-9xl text-white font-made-tommy">
//         <div className="rounded-t-none rounded-br-none rounded-bl-11xl bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[15px]">
//           <div className="relative font-medium">MEN</div>
//         </div>
//         <div className="bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[15px]">
//           <div className="relative font-medium">WOMEN</div>
//         </div>
//         <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
//           <div className="relative font-medium">KIDS</div>
//         </div>
//       </div>
//       <div className="absolute top-[700px] left-[calc(50%_-_95px)] rounded-2xl bg-darkgray-900 h-[23px] flex flex-row items-start justify-start pt-1.5 px-3 pb-[7px] box-border gap-[28px]">
//         <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
//         <div className="w-[15px] relative rounded-[50%] box-border h-[15px] border-[3px] border-solid border-gray-900" />
//         <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
//         <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
//         <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
//       </div>
//       {/* <ListboxComponent
//         chevron="/chevron.svg"
//         propTop="816px"
//         propLeft="1333px"
//         propHeight="1px"
//         propOpacity="0"
//         propBackgroundColor="unset"
//         propBackgroundColor1="#fff"
//         propBackgroundColor2="#fff"
//         propBackgroundColor3="#fff"
//       /> */}
//       <div className="absolute top-[833px] left-[490px] text-xl text-black">
//         Women T-Shirt
//       </div>
//       <div className="absolute top-[835px] left-[684px] rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-darkgray-100">
//         <div className="relative">All T-Shirt</div>
//         <img
//           className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
//           alt=""
//           src="/phx.svg"
//         />
//       </div>
//       <FrameComponent5
//         overSizedTShirt="Over Sized T-shirt"
//         allTShirt="All T-shirt"
//         menFullSleeveTShirts="Women Full Sleeve T-shirts"
//         hoodedTShirts="Hooded T-shirts"
//         jackets="Jackets"
//         dropCutTShirts="Drop Cut T-shirts"
//         easyFitFullSleeveTShirt="Easy Fit Full Sleeve T-shirt"
//       />
//       <FrameComponent4 propTop="1716px" propHeight="371px" />
//       <FrameComponent3 />

//       <div className='absolute top-[946px] left-[503px] flex flex-row gap-8'>
//       {
//           products.filter((e)=>(e.category==="ReadymadeTshirtWOMEN")).map(products =>(
//             <a href='' onClick={
//               (e) => {
//                 nav('/material-page', { state: { id: products._id} });
//               }
//           }>
//       <div className="shadow-[1px_0px_19.3px_rgba(0,_0,_0,_0.3)] w-[348px] h-[552px] font-inter">
//         <div className="relative top-[0px] left-[0px] rounded-t-xl rounded-br-120xl rounded-bl-xl bg-bisque w-[348px] h-[552px] overflow-hidden">
//           <img
//             className="relative top-[229px] left-[179px] w-6 h-6 overflow-hidden"
//             alt=""
//             src="/mingcuteupfill.svg"
//           />
//           <img
//             className="absolute top-[-1px] left-[calc(50%_-_146px)] w-[293px] h-[391px] object-cover"
//             alt=""
//             src={products.image1}
//           />

//           <div className="absolute top-[469px] left-[15px]">
//             {products.title}
//           </div>
//           <img
//             className="absolute top-[519.3px] left-[15px] max-h-full w-[233px]"
//             alt=""
//             src="/vector-13.svg"
//           />
//           <div className="absolute top-[498px] left-[15px] font-semibold">
//             ₹{products.price}
//           </div>
//           <div className="absolute top-[528px] left-[16px] text-2xs">
//             MRP incl. of all taxes
//           </div>
//           <div className="absolute top-[0px] left-[313px] bg-whitesmoke-100 w-[54px] h-[390px]" />
//           <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[54px] h-[390px]" />
//         </div>
//         {/* <img
//           className="absolute top-[462px] left-[258px] rounded-23xl w-[90px] h-[90px] overflow-hidden"
//           alt=""
//           src="/solarbagoutline6.svg"
//         /> */}
//       </div>
//       </a>
//           ))}
//       </div>

//       <FrameComponent1
//         frame10="/frame-10.svg"
//         frame11="/frame-11.svg"
//         frame12="/frame-12.svg"
//         frame14="/frame-14.svg"
//         propTop="unset"
//         propBottom="0px"
//         propBackgroundColor="#ff6868"
//         propBackgroundColor1="#ebebeb"
//         propBackgroundColor2="#ff6868"
//       />
//       <div className="absolute top-[778px] left-[490px]">Home / Readymade</div>
//     </div>
//   );
// };

// export default ReadymadeTshirtWOMENPag;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import { Link } from 'react-router-dom';

const ReadymadeTshirtWOMENPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Sorting Options");
  const [products, setProducts] = useState([]);
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
        setProducts(data);
        console.log(data);
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="bg-white text-dimgray-600 font-poppins">
      {/* <MainHeader /> */}


      <div className="relative">
        {/*************************** Main Image ***************************/}
        <img
          className="mt-20 w-full h-auto md:aspect-w-16 md:aspect-h-9 object-cover"
          alt="main image"
          src="/image-7@2x.png"
        />

        {/***************** side navigation component *************************/}
        <div className="absolute top-20 right-0 flex rounded-t-none justify-between flex-row w-auto   lg:text-9xl  md:font-bold text-white md:text-4xl text-sm  font-made-tommy ">
          <Link to="/readymade-tshirt-men-page" className="no-underline text-white">
            <div className="md:p-4  bg-salmon-100 rounded-bl-11xl p-1  ">MEN</div>
          </Link>
          <Link to="/readymade-tshirt-women-page" className=" p-1 md:p-4 bg-yellow-400 no-underline text-white">
            <div>WOMEN </div>
          </Link>
          <Link to="/readymade-kids-page" className="no-underline text-white">
            <div className="md:p-4 rounded-br-11xl p-1 bg-salmon-100 ">KIDS</div>
          </Link>
        </div>



      </div>


      {/*************************** Scrollable Dots ***************************/}
      <div className="bg-[#d5d1d1] md:w-1/6 w-1/5 py-1 md:px-4 px-2 justify-between text-center rounded-2xl mx-auto mb-10 mt-12 flex flex-row">
        <span className="h-2 w-2 md:h-4 md:w-4 py-auto rounded-full bg-black"></span>
        <span className="md:w-[16px] md:h-[16px] w-2 h-2 relative rounded-[50%] box-border border-[3px] border-solid border-gray-900"></span>
        <span className="h-2 w-2 md:h-4 md:w-4 py-auto rounded-full bg-black"></span>
        <span className="h-2 w-2 md:h-4 md:w-4 py-auto rounded-full bg-black"></span>
        <span className="h-2 w-2 md:h-4 md:w-4 py-auto rounded-full bg-black"></span>
      </div>

      {/*************************** Page Title ***************************/}
      <div className='flex flex-row mb-10 w-[95%] md:w-full items-start justify-center'>
        <div className='hidden md:inline-block'></div>
        <div className='flex items-end flex-col'>
          <div className="p-3 text-dimgray-300">
            Home / Readymade
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="text-xl pl-2 md:pr-3 text-black">
              Women T-Shirt
            </div>
            <div className="rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] text-dimgray-300 border-[1px] border-solid border-darkgray-100">
              <span className="relative">All T-Shirt</span>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                alt=""
                src="/phx.svg"
              />
            </div>
          </div>
        </div>

        {/**************************** Sorting Option ***************************/}
        <div
          className="rounded-lg bg-whitesmoke-200 mt-5 md:ml-20 flex items-center justify-between px-2 md:px-4 py-2 text-lg text-black font-made-tommy border border-solid border-gray-500 w-64 cursor-pointer"
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

      {/**************************** Filtering Components ***************************/}
      <div className='flex flex-col md:flex-row'>
        <div className='flex md:w-[30%] flex-col'>
          <FrameComponent5
            overSizedTShirt="Over Sized T-shirt"
            allTShirt="All T-shirt"
            menFullSleeveTShirts="Women Full Sleeve T-shirts"
            hoodedTShirts="Hooded T-shirts"
            jackets="Jackets"
            dropCutTShirts="Drop Cut T-shirts"
            easyFitFullSleeveTShirt="Easy Fit Full Sleeve T-shirt"
          />
          <div className='mb-3'>
            <FrameComponent3 />
          </div>
          <div className='mb-3'>
            <FrameComponent4 />
          </div>
        </div>

        {/**************************** Product Display ***************************/}
        <div className="grid grid-cols-1 md:w-[72%] mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-5 md:gap-10 lg:gap-9">
          {products.filter((e) => (e.category === "ReadymadeTshirtWOMEN")).map((product) => (
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
                    <div className="text-xs whitespace-pre-wrap text-gray-500 pb-2 pl-2 mt-1">
                      {product.description.length > 10 ? product.description.substring(0, 10) + '...' : product.description}
                    </div>

                    <button
                      className="mb-3 ml-2 mt-2 font-semibold rounded-xl bg-lightsalmon-100 py-1 px-4"
                      onClick={(e) => {
                        e.preventDefault();
                        nav('/material-page', { state: { id: product._id } });
                      }}
                    >
                      Read more
                    </button>
                    {/*************************** Solarbag Out Image ***************************/}
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

      {/**************************** Navigation Component ***************************/}
      <div className="mt-2 mx-auto w-full md:w-[40%]">
        {/* <FrameComponent1 /> */}
      </div>
    </div>
  );
}

export default ReadymadeTshirtWOMENPage;
