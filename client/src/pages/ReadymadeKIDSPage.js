import MainHeader from "../components/MainHeader";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent1 from "../components/FrameComponent1";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const ReadymadeKIDSPage = () => {
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
        console.log(data)
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

  return (
    <div className="bg-white text-dimgray-600 font-poppins">
<MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
      <div className="relative">
        {/*************************** Main Image ***************************/}
        <img
          className="mt-20 w-full h-auto md:aspect-w-16 md:aspect-h-9 object-cover"
          alt="main image"
          src="/image-22@2x.png"
        />


        <div className="absolute top-20 lg:left-10 flex rounded-t-none justify-between flex-row w-auto gap-1 md:gap-[10px] lg:text-6xl py-2  px-2 font-bold text-white md:text-4xl text-sm bg-salmon-100 font-made-tommy rounded-bl-11xl rounded-br-11xl">
          <div className="pl-2">BOYS |</div>

          <div className="pr-2">GIRLS</div>
        </div>

        {/***************** side navigation component *************************/}
        <div className="absolute top-20 right-0 flex rounded-t-none justify-between flex-row w-auto   lg:text-9xl  md:font-bold text-white md:text-4xl text-sm  font-made-tommy ">
          <Link to="/readymade-tshirt-men-page" className="no-underline text-white">
            <div className="md:p-4  bg-salmon-100 rounded-bl-11xl p-1  ">MEN</div>
          </Link>
          <Link to="/readymade-tshirt-women-page" className=" p-1 md:p-4 bg-salmon-100 no-underline text-white">
            <div>WOMEN </div>
          </Link>
          <Link to="/readymade-kids-page" className="no-underline text-white">
            <div className="md:p-4 rounded-br-11xl p-1 bg-yellow-400">KIDS</div>
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
      <div className='flex flex-row mb-10 w-[95%] md:w-full items-start justify-center'>
        <div className='hidden md:inline-block'></div>
        <div className='flex items-end flex-col'>
          <div className="p-3 text-dimgray-300">
            Home / Readymade
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="text-xl pl-2 md:pr-3 text-black">
              Girls Cotton Dresses
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
      </div>

      {/**************************** Filtering Components ***************************/}
      <div className='flex flex-col md:flex-row'>
        <div className='flex md:w-[30%] flex-col'>
          <FrameComponent6
            girlsCottonTShirtDresses="Girls Cotton T-Shirt Dresses"
            allTShirt="All T-shirt"
            girlsCottonDresses="Girls Cotton Dresses"
            girlsCottonPoloDresses="Girls Cotton Polo Dresses"
          />


          <div className="mb-3">
            <div className="shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs md:mt-3 bg-white box-border w-[80%] md:w-full mb-5 md:mb-0 max-w-[412px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500 mx-auto">
              <h2 className='text-2xl pl-2'>SIZE</h2>
              <div className="rounded-6xs m-3 bg-whitesmoke-200 flex items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver mb-4">
                <div className="w-full">Search for Size</div>
              </div>
              <div className="flex flex-wrap my-2 p-1">
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">2-3Y</div>
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">4-5Y</div>
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">6-7Y</div>
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">8-9Y</div>
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">10-11Y</div>
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">12-13Y</div>
                <div className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center">14-15Y</div>

              </div>
            </div>
          </div>
          <div className="md:mb-4">
            <FrameComponent4 />
          </div>


        </div>



        <div className="grid grid-cols-1 md:w-[72%] mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-5 md:gap-10 lg:gap-9 ">
          {products.filter((e)=>(e.category==="ReadymadeKIDS")).map((product) => (
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

export default ReadymadeKIDSPage;