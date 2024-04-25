const FrameComponent8 = ({ showFrameDiv }) => {
  return (
    showFrameDiv && (
      <div className="absolute top-[1266px] left-[25px] shadow-[1px_2px_15.4px_rgba(0,_0,_0,_0.25)] rounded-6xs bg-white box-border w-[412px] h-[297px] overflow-hidden text-left text-lg text-dimgray-700 font-made-tommy border-[0.7px] border-solid border-darkgray-500">
        <div className="absolute top-[78px] left-[calc(50%_-_179px)] rounded-6xs bg-whitesmoke-200 box-border w-[359px] h-10 flex flex-row items-center justify-center p-2.5 text-darkgray-400 border-[0.7px] border-solid border-silver">
          <div className="w-[123px] absolute !m-[0] top-[calc(50%_-_11px)] left-[20.5px] inline-block z-[0]">
            Search for Size
          </div>
        </div>
        <div className="absolute top-[145px] left-[38px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[11px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_5px)] inline-block z-[0]">
            S
          </div>
        </div>
        <div className="absolute top-[145px] left-[128px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 border-[2px] border-solid border-black">
          <div className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] inline-block z-[0]">
            XL
          </div>
        </div>
        <div className="absolute top-[28px] left-[27px] text-7xl tracking-[0.02em] font-medium font-poppins text-black">
          SIZE
        </div>
      </div>
    )
  );
};

export default FrameComponent8;
