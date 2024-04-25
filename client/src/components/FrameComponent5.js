const FrameComponent5 = ({
  overSizedTShirt,
  allTShirt,
  menFullSleeveTShirts,
  hoodedTShirts,
  jackets,
  dropCutTShirts,
  easyFitFullSleeveTShirt,
}) => {
  return (
    <div className="absolute top-[946px] left-[25px] shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[412px] h-[371px] overflow-hidden text-left text-mini text-black font-poppins border-[0.7px] border-solid border-darkgray-500">
      <div className="absolute top-[78px] left-[calc(50%_-_179px)] rounded-6xs bg-whitesmoke-200 box-border w-[359px] h-10 flex flex-row items-center justify-center p-2.5 text-lg text-darkgray-400 font-made-tommy border-[0.7px] border-solid border-silver">
        <div className="w-[156px] absolute !m-[0] top-[calc(50%_-_11px)] left-[20.5px] inline-block z-[0]">
          Search for Product
        </div>
      </div>
      <div className="absolute top-[159px] left-[58px]">{overSizedTShirt}</div>
      <div className="absolute top-[129px] left-[58px]">{allTShirt}</div>
      <div className="absolute top-[28px] left-[27px] text-7xl tracking-[0.02em] font-medium">
        PRODUCTS
      </div>
      <div className="absolute top-[189px] left-[58px]">
        {menFullSleeveTShirts}
      </div>
      <div className="absolute top-[219px] left-[58px]">{hoodedTShirts}</div>
      <div className="absolute top-[249px] left-[58px]">{jackets}</div>
      <div className="absolute top-[279px] left-[58px]">{dropCutTShirts}</div>
      <div className="absolute top-[309px] left-[58px]">
        {easyFitFullSleeveTShirt}
      </div>
      <div className="absolute top-[160px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
      <img
        className="absolute top-[130px] left-[27px] rounded-sm w-[21px] h-[21px] overflow-hidden"
        alt=""
        src="/frame-39.svg"
      />
      <div className="absolute top-[190px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
      <div className="absolute top-[220px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
      <div className="absolute top-[250px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
      <div className="absolute top-[280px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
      <div className="absolute top-[310px] left-[27px] shadow-[0px_0px_3.8px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-whitesmoke-200 w-[21px] h-[21px] overflow-hidden" />
    </div>
  );
};

export default FrameComponent5;