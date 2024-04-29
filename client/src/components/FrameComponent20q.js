const FrameComponent20 = ({ dashboard }) => {
  return (
    <div className="absolute top-[50px] left-[calc(50%_-_330px)] shadow-[0px_286px_80px_rgba(0,_0,_0,_0),_0px_183px_73px_rgba(0,_0,_0,_0.01),_0px_103px_62px_rgba(0,_0,_0,_0.05),_0px_46px_46px_rgba(0,_0,_0,_0.09),_0px_11px_25px_rgba(0,_0,_0,_0.1)] rounded-7xl bg-white w-[1119px] h-[93px] overflow-hidden text-left text-17xl text-black font-made-tommy">
      <div className="absolute top-[calc(50%_-_22.5px)] left-[64px]">
        {dashboard}
      </div>
      <div className="absolute top-[24px] left-[895px] rounded-4xs bg-salmon w-40 h-[45px] flex flex-row items-center justify-center p-2.5 box-border gap-[15px] text-base text-white">
        <img
          className="w-[25px] absolute !m-[0] top-[10px] left-[16.5px] rounded-45xl h-[25px] overflow-hidden shrink-0 z-[0]"
          alt=""
          src="/codiconaccount2q.svg"
        />
        <div className="w-[87px] absolute !m-[0] top-[12.5px] left-[56.5px] font-medium inline-block z-[1]">
          Gurusankar
        </div>
      </div>
    </div>
  );
};

export default FrameComponent20;
