import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MenHomePage = () => {
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

  const headingStyle = {
    textShadow: '2px 2px 4px black',
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/*************************** navbar starts here **************************************/}
      <MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />

      {/*************************** navbar ends here **************************************/}


      {/***************************main image starts here **************************************/}

      <img
        className="mt-20 w-full h-auto md:aspect-w-16 md:aspect-h-9 object-cover"
        alt="main image"
        src="/13662927-5313737-1@2x.png"
      />
      {/***************************main image ends here **************************************/}




      {/* here is the scrollable dots  */}

      <div className=" bg-[#d5d1d1]  md:w-1/6  w-1/5 py-2 md:px-4 px-2  justify-between text-center rounded-2xl mx-auto mt-12 flex flex-row">
        <span className="h-2 w-2 md:h-4 md:w-4  py-auto rounded-full bg-black"> </span>
        <span className="md:w-[16px]  md:h-[16px] w-2 h-2 relative rounded-[50%] box-border border-[3px] border-solid border-gray-900" ></span>
        <span className="h-2 w-2 md:h-4 md:w-4  py-auto rounded-full bg-black"></span>
        <span className="h-2 w-2 md:h-4 md:w-4   py-auto rounded-full bg-black"></span>
        <span className="h-2 w-2 md:h-4 md:w-4   py-auto rounded-full bg-black"></span>

      </div>
      {/* *********************scrollable dots  ends *********************/}



      {/* here is the frame components */}
      <FrameComponent />

      {/* frame components end here */}



      {/************************* here goes the category *****************************/}


      <style>{`
        .text-shadow {
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
      `}</style>
      <div>
        <h2 className=" text-center  text-21xl">CATEGORY</h2>

        <div className="flex flex-wrap   justify-center md:justify-between px-6">

          <div className="relative flex flex-col items-center w-[150px] lg:w-[480px] h-[150px] lg:h-[480px] mt-6 md:mt-0">
            <a
              href="/readymade-tshirt-men-page"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/manblacktshirtwithtattoohisarmbackview-114261616-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold  inline-block">
                <span className=" text-white  text-shadow  rounded px-3 py-2">
                  OVERSIZED T-SHIRT
                </span>
              </span>
            </a>
          </div>

          <div className="relative flex flex-col items-center w-[150px] lg:w-[480px] h-[150px] lg:h-[480px] mt-6 md:mt-0">
            <a
              href="/readymade-tshirt-men-page"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/basicgreenshirtmenrsquosfashionapparelstudioshoot-53876101197-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold  inline-block">
                <span className=" text-white text-shadow  rounded px-3 py-2">
                  SHIRT
                </span>
              </span>
            </a>
          </div>

          <div className="relative flex flex-col items-center w-[150px] lg:w-[480px] h-[150px] lg:h-[480px] mt-6 md:mt-0">
            <a
              href="/readymade-lower-page"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/portraitfemalelegsjeans-17133711954-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold inline-block">
                <span className=" text-shadow text-white  rounded px-3 py-2">
                  LOWERS
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="flex  flex-row  justify-between   mt-6 px-6">
          <div className="relative ml-1 mr-1 flex flex-col items-center w-1/2 md:h-[300px]  lg:[400px]  h-[100px] mt-6 ">
            <a
              href="/accessories-hanky"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/whitehandkerchiefclothassortment-232149091418-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold shadow-lg inline-block">
                <span className=" text-white text-shadow rounded px-3 py-2">
                  HANKY
                </span>
              </span>
            </a>
          </div>

          <div className="relative  ml-1 mr-1 flex flex-col items-center w-1/2  md:h-[300px]  lg:[400px] h-[100px] mt-6 ">
            <a
              href="/"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/frontviewstacktowelphysiotherapyoffice-232148789867-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold shadow-lg inline-block">
                <span className=" text-white text-shadow rounded px-3 py-2">
                  TOWELS
                </span>
              </span>
            </a>
          </div>
        </div>






        <div className="flex flex-wrap   justify-center md:justify-between mt-10 px-6">

          <div className="relative flex flex-col items-center w-[150px] lg:w-[480px] h-[150px] lg:h-[480px] mt-6 md:mt-0">
            
               <a href="/accessories-socks"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/couplewithfeetwallvalentinesday-232148383150-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold  inline-block">
                <span className=" text-white  text-shadow  rounded px-3 py-2">
                  SOCKS
                </span>
              </span>
            </a>
          </div>

          <div className="relative flex flex-col items-center w-[150px] lg:w-[480px] h-[150px] lg:h-[480px] mt-6 md:mt-0">
            
             <a href="/accessories-arm-sleeves"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                src="/photofrontmodelwithblacksweatshirt-1255402797-1@2x.png"
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold  inline-block">
                <span className=" text-white text-shadow  rounded px-3 py-2">
                 ARM SLEEVES
                </span>
              </span>
            </a>
          </div>

          <div className="relative flex flex-col items-center w-[150px] lg:w-[480px] h-[150px] lg:h-[480px] mt-6 md:mt-0">
            <a href="/accessories-socks"
              className="block w-full h-full rounded-lg overflow-hidden relative"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="socks"
                src="/fashionablegirlknittedsocks-1585954133-1@2x.png"
               
              />
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold inline-block">
                <span className=" text-shadow text-white  rounded px-3 py-2">
                STOKING SOCKS
                </span>
              </span>
            </a>
          </div>
        </div>



      </div>


      {/************************* here ends the category *****************************/}




      {/* **********************products start here ***************************/}




      <div className="h-full w-full flex flex-col justify-center content-center mb-10">
        <h2 className=" text-center  text-21xl">TOP SELLING</h2>

        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-9">
          {products.filter((e) => (e.category === "Top seller")).map((product) => (
            <a
              key={product._id}
              href=''
              className="no-underline"
              onClick={(e) => {
                e.preventDefault();
                nav('/material-page', { state: { id: product._id } });
              }}
            >
              <div className="font-inter relative">
                <div className="w-full rounded-br-[135px] rounded-bl-xl shadow-dimgray-600 shadow-lg relative">
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
      {/* **********************products ends here ***************************/}

      {/* <img
        className="absolute top-[3721px] left-[1628px] w-[57px] h-[57px]"
        alt=""
        src="/group-6.svg"
      />
      <img
        className="absolute top-[4431px] left-[1628px] w-[57px] h-[57px]"
        alt=""
        src="/group-6.svg"
      /> */}



      {/* **********************products ends here ***************************/}

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
    </div >
  );
};

export default MenHomePage;