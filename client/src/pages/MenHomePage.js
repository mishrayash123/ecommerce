import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MenHomePage = () => {
  const userid = localStorage.getItem("paricollectionuserId");
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Assuming there are 5 slides
  };

  useEffect(() => {
    setInterval(nextSlide, 10000);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
  };

  const items = [
    <img key={1} src="https://marketplace.canva.com/EAFKG4KiOj4/1/0/1600w/canva-black-yellow-bold-bag-fashion-sale-banner-mbZi15kP9Yg.jpg" alt="Kitten 1"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={2} src="https://marketplace.canva.com/EAFKG4KiOj4/1/0/1600w/canva-black-yellow-bold-bag-fashion-sale-banner-mbZi15kP9Yg.jpg" alt="Kitten 1"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={3} src="https://png.pngtree.com/thumb_back/fh260/background/20201108/pngtree-blak-friday-sale-background-with-illustration-of-online-shope-mobile-phone-image_456310.jpg" alt="Kitten 1"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={4} src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-sale-banner-background-with-shopping-cart-and-gift-box-picture-image_1242738.jpg" alt="Kitten 2"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={5} src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-sale-background-design-template-banner-discount-vector-poster-business-picture-image_1227059.jpg" alt="Kitten 3"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={6} src="https://static.vecteezy.com/system/resources/previews/006/309/295/non_2x/flash-sale-banner-background-special-offer-template-design-for-media-promotion-and-social-media-business-post-vector.jpg" alt="Kitten 2"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={7} src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg" alt="Kitten 3"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
  ];


  const slideButtons = Array.from({ length: 6 }, (_, i) => (
    <button
      key={i}
      type="button"
      className={`w-3 h-3 rounded-full ${
        i === currentIndex ? 'bg-white' : 'bg-white/30 dark:bg-gray-800/30'
      }`}
      aria-current={i === currentIndex}
      aria-label={`Slide ${i + 1}`}
      onClick={() => setCurrentIndex(i)}
    ></button>
  ));

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

      <div>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden  md:h-96">
        {items.map((item,index) => (
          <div
            key={index}
            className={` duration-700 ease-in-out ${
              index - 1 === currentIndex ? 'block' : 'hidden'
            }`}
            data-carousel-item
          >
          {item}
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slideButtons}
      </div>
      
    </div>
      </div>
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
              <div className="font-inter relative">
                <div className="w-full rounded-br-[135px] rounded-bl-xl shadow-dimgray-600 shadow-lg relative">
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
              </div>
          ))}
        </div>

      </div>
      {/* **********************products ends here ***************************/}



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