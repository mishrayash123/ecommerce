import { useState } from 'react';

const FrameComponent5 = ({onTittleSelect}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [iconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked(!iconClicked);
  };

  const onSizeSelect = (event) => {
    setSelectedItem(event.target.value);
    onTittleSelect(event.target.value)
  };

  const sizes = [
    'overSizedTShirt', 
    'allTShirt', 
    'menFullSleeveTShirts', 
    'hoodedTShirts', 
    'jackets', 
    'dropCutTShirts', 
    'easyFitFullSleeveTShirt'
  ];

  return (
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
          onClick={handleIconClick}
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
              onChange={onSizeSelect}
              checked={selectedItem === size}
            />
            {size}
          </label>
        ))}
      </div>
      <div className="rounded-sm bg-whitesmoke-200 w-5 h-5 shadow-[0px_0px_3.8px_rgba(0, 0, 0, 0.25)_inset] mr-2" />
      {selectedItem && <div className="mt-4 md:mt-6">Selected: {selectedItem}</div>}
    </div>
  );
};

export default FrameComponent5;
