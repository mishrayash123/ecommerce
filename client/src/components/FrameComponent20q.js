const FrameComponent20 = ({ dashboard }) => {
  const email = localStorage.getItem("email");

  return (
    <div className="flex flex-row justify-between">
      <div></div>
    <div className=" justify-between w-full  m-5 shadow-[0px_286px_80px_rgba(0,_0,_0,_0),_0px_183px_73px_rgba(0,_0,_0,_0.01),_0px_103px_62px_rgba(0,_0,_0,_0.05),_0px_46px_46px_rgba(0,_0,_0,_0.09),_0px_11px_25px_rgba(0,_0,_0,_0.1)] rounded-7xl bg-white overflow-hidden text-left text-17xl text-black font-made-tommy">
     <div className="flex lg:flex-row justify-between flex-col m-5">
      <div className="">
        {dashboard}
      </div>
      <button className=" rounded-4xs bg-blue-500 w-50  flex flex-row items-center justify-center p-2.5 box-border gap-[15px] text-base text-white font-roboto font-bold">
  <img
    className="w-6 rounded-45xl h-6 overflow-hidden shrink-0 z-[0]"
    alt=""
    src="/codiconaccount2q.svg"
  />
  {email}
</button>
</div>
</div>
</div>
    
  );
};

export default FrameComponent20;
