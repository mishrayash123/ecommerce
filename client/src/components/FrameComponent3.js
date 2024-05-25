import React from 'react';

const FrameComponent3 = ({ onSizeSelect }) => {
  // Array of available sizes
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL','XXXL'];

  return (
    <div>
      <div className="shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs md:mt-3 bg-white box-border w-[80%] md:w-full mb-5 md:mb-0 max-w-[412px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500 mx-auto">
        <h2 className='text-2xl pl-2'>SIZE</h2>
        <div className="rounded-6xs m-3 bg-whitesmoke-200 flex items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver mb-4">
          <div className="w-full">Search for Product</div>
        </div>
        <div className="flex flex-wrap my-2 p-1">
          {/* Map over sizes array to generate size filter options */}
          {sizes.map((size, index) => (
            <div
              key={index}
              className="border-2 border-solid my-2 border-black text-gray-600 font-bold text-sm md:text-lg w-1/5 py-1 mx-2 rounded-lg text-center cursor-pointer"
              onClick={() => onSizeSelect(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
