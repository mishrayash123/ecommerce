const FrameComponent6 = ({
  girlsCottonTShirtDresses,
  allTShirt,
  girlsCottonDresses,
  girlsCottonPoloDresses,
}) => {
  return (
    <>
      <div className="shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[80%] md:w-full mb-5 md:mb-0 max-w-[412px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500 mx-auto">

        <h2 className='text-2xl pl-2'>PRODUCTS</h2>
        <div className="rounded-6xs m-3 bg-whitesmoke-200 flex items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver mb-4">
          <div className="w-full">Search for Product</div>
        </div>
        <div>
          <img
            className="rounded-sm ml-2 w-5 h-5"
            alt="none"
            src="/frame-39.svg"
          />
          <span onClick={() => { setSelectedItem(allTShirt); handleIconClick(); }}> {allTShirt}</span>
        </div>

        <div className="mb-4">

          {[allTShirt, girlsCottonTShirtDresses, girlsCottonDresses, girlsCottonPoloDresses,].map((item, index) => (
            <div className="flex items-center" key={index}>
              <div className="rounded-sm border-[0.7px] border-solid bg-whitesmoke-200 ml-2 w-5 h-5 mr-2" />

              <div onClick={() => { setSelectedItem(item); handleIconClick(); }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FrameComponent6;
