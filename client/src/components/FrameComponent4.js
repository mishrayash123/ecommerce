import { useState } from "react";

const FrameComponent4 = ({ propTop, propHeight }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(""); // State to store the selected price range

  return (
    <div
      className="absolute top-[1716px] left-[25px] shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[412px] h-[371px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500"
    >
      <div className="absolute top-[78px] left-[calc(50%_-_179px)] rounded-6xs bg-whitesmoke-200 box-border w-[359px] h-10 flex flex-row items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver">
        <div className="w-[131px] absolute !m-[0] top-[calc(50%_-_11px)] left-[20.5px] inline-block z-[0]">
          Search for Price
        </div>
      </div>
      <div className="absolute top-[159px] left-[58px]">
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
      <div className="absolute top-[129px] left-[58px]">
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
      <div className="absolute top-[28px] left-[27px] text-7xl tracking-[0.02em] font-medium">
        PRICES
      </div>
      <div className="absolute top-[189px] left-[58px]">
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
      <div className="absolute top-[219px] left-[58px]">
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
      {/* Add radio buttons for other price ranges */}
    </div>
  );
};

export default FrameComponent4;
