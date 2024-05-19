import React from 'react'
import { useState } from 'react';

const FrameComponent4 = ({ propTop, propHeight }) => {

  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  return (
    <div className="shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)]  pb-2   rounded-6xs bg-white box-border w-[80%] md:w-full mb-5 md:mb-0 max-w-[412px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500 mx-auto">

      <h2 className='text-2xl pl-2'>PRICES</h2>

      <div className="rounded-6xs m-3 bg-whitesmoke-200 flex items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver mb-4">
        <div className="w-full">Search for Prices</div>
      </div>
      <div className=" pl-2">
         <label className="radio-label">
          <input
            type="radio"
            value="Rs. 774 To Rs. 1248"
            checked={selectedPriceRange === "Rs. 774 To Rs. 1248"}
            onChange={() => setSelectedPriceRange("Rs. 774 To Rs. 1248")}
          />

          <span className="radio-custom"></span>
          Rs. 774 To Rs. 1248
        </label>
      </div>

      <div className=" pl-2">
         <label className="radio-label">
          <input
            type="radio"
            value="Rs. 299 To Rs. 773"
            checked={selectedPriceRange === "Rs. 299 To Rs. 773"}
            onChange={() => setSelectedPriceRange("Rs. 299 To Rs. 773")}
          />

          <span className="radio-custom"></span>
          Rs. 299 To Rs. 773
        </label>
      </div>



      <div className="pl-2">
         <label className="radio-label">
          <input
            type="radio"
            value="Rs. 1249 To Rs. 1723"
            checked={selectedPriceRange === "Rs. 1249 To Rs. 1723"}
            onChange={() => setSelectedPriceRange("Rs. 1249 To Rs. 1723")}
          />

          <span className="radio-custom"></span>
          Rs. 1249 To Rs. 1723
        </label>
      </div>



      <div className="pl-2">
         <label className="radio-label">
          <input
            type="radio"
            value="Rs. 1724 To Rs. 2199"
            checked={selectedPriceRange === "Rs. 1724 To Rs. 2199"}
            onChange={() => setSelectedPriceRange("Rs. 1724 To Rs. 2199")}
          />

          <span className="radio-custom"></span>
          Rs. 1724 To Rs. 2199
        </label>
      </div>


    </div>
  )
}

export default FrameComponent4