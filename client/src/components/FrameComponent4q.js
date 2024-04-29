const FrameComponent4 = () => {
  return (
    <div className="absolute top-[371px] left-[87px] rounded-10xs bg-whitesmoke-300 box-border w-[430px] h-[302px] overflow-hidden text-left text-lg text-darkslategray-800 font-inter border-[1px] border-solid border-darkgray-600">
      <div className="absolute top-[36px] left-[22px] font-semibold">
        Minisha Manoj
      </div>
      <div className="absolute top-[73px] left-[22px]">11/3</div>
      <div className="absolute top-[110px] left-[22px]">Kottai Street</div>
      <div className="absolute top-[147px] left-[22px]">Madurai</div>
      <div className="absolute top-[184px] left-[22px]">
        <span>{`Mobile: `}</span>
        <span className="font-semibold">1234567890</span>
      </div>
      <div className="absolute top-[19px] left-[382px] rounded-2xs box-border w-5 h-5 overflow-hidden border-[2px] border-solid border-salmon">
        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-2xs bg-salmon w-3 h-3" />
      </div>
    </div>
  );
};

export default FrameComponent4;
