import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import MainHeader from "../components/MainHeader";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";


const ReadymadeLowerPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Sorting Options");
  const [products, setproducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const nav = useNavigate();
  const userid = localStorage.getItem("paricollectionuserId");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [filterByTitle , setFilterByTitle] = useState("")

  const handleData = (size) =>{
    setFilterByTitle(size)
  }


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // You can perform any action here based on the selected size
  };

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

  
  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  const filterProductsByPriceRange = (products) => {
    if (!selectedPriceRange) return products;

    const [min, max] = selectedPriceRange
      .replace(/Rs\.|,/g, "")
      .split("To")
      .map(Number);

    return products.filter((product) => {
      let price;

      if (typeof product.price === "number") {
        price = product.price;
      } else if (typeof product.price === "string") {
        price = Number(product.price.replace(/Rs\.|,/g, ""));
      } else {
        return false;
      }

      return price >= min && price <= max;
    });
  };

  const filterProducts = (products) => {
    // Filter by price range
    let filteredProducts = filterProductsByPriceRange(products);
  
    // Filter by size if a size is selected
    if (selectedSize) {
      filteredProducts = filteredProducts.filter((product) => product.size === selectedSize);
    }
  
    return filteredProducts;
  };
  
 
  
  const filterByTitleDescription = (products) => {
    let filteredProducts = filterProducts(products);
  
    // Filter by title if filterByTitle is defined
    if (filterByTitle) {
      filteredProducts = filteredProducts.filter(product =>
        product.description.includes(filterByTitle)
      );
    }

    return filteredProducts;
  };
  
  const filteredProducts = filterByTitleDescription(
    products.filter(product => product.category === "ReadymadeLower")
  );
  
  const sizes = [
    'Over Sized  Lower', 
    'All  Lower', 
    'Mens  Lower', 
    'readymade Lower', 
    'short  Lower', 
    'Lower', 
    'Easy Fit Full  Lower'
  ];
  



  return (
    <div className=" bg-white text-dimgray-600 font-poppins">
<MainHeader
        className="sticky z-50"
        solarbagOutline="/solarbagoutline1.svg"
        ionsearch="/ionsearch.svg"
        basilnotificationOutline="/basilnotificationoutline.svg"
        prop="2"
      />
      
      <div >
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
      <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slideButtons}
      </div>     
    </div>
      </div>
      {/******************************** title of the page ********************** */}

      <div className='flex flex-row mb-10  w-[95%]  md:w-full items-start justify-center'>
        <div className='hidden md:inline-block'></div>
        <div className='flex items-end flex-col'>
          <div className=" p-3 text-dimgray-300">
            Home / Readymade  Lower
          </div>

          <div className=" flex  justify-between flex-col md:flex-row">
            <div className="text-xl  pl-2 md:pr-3 text-black">
            Lower
            </div>
            <div className=" rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] text-dimgray-300 border-[1px] border-solid border-darkgray-100">
              <span className="relative">All  Lower</span>
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
<div className="shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[80%] md:w-full mb-5 md:mb-0 max-w-[412px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500 mx-auto">

<h2 className='text-2xl pl-2'>PRODUCTS</h2>
<div className="rounded-6xs m-3 bg-whitesmoke-200 flex items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver mb-4">
  <div className="w-full">Search for Product</div>
</div>
<div>
  <img
    className="rounded-sm ml-2 w-5 h-5 cursor-pointer"
    alt="none"
    src="/frame-39.svg"
  />
</div>
<div className="my-2 p-1">
  {sizes.map((size, index) => (
    <label key={index} className="block cursor-pointer my-2">
      <input
        type="radio"
        name="size"
        value={size}
        className="mr-2"
        onClick={()=>handleData(size)}
      />
      {size}
    </label>
  ))}
</div>
<div className="rounded-sm bg-whitesmoke-200 w-5 h-5 shadow-[0px_0px_3.8px_rgba(0, 0, 0, 0.25)_inset] mr-2" />
</div>
          </div>


          <div className='mb-3'>
          <FrameComponent3 onSizeSelect={handleSizeSelect} />
          </div>

          <div className='mb-3'>
          <FrameComponent4 onPriceRangeChange={handlePriceRangeChange} />
          </div>


        </div>








        {/******************************* code with filter ****************************************** */}
        <div className="grid grid-cols-1 md:w-[72%] mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-5 md:gap-10 lg:gap-9 ">
          {filteredProducts.map((product) => (
            
              <div className="font-inter md:ml-2 lg:ml-0 relative">
                <div className="w-full lg:w-[95%] rounded-br-[135px] mt-2 rounded-bl-xl rounded-t-xl shadow-dimgray-600 shadow-lg relative">
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

export default ReadymadeLowerPage;

