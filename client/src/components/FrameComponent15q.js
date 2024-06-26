import FrameComponent19 from "./FrameComponent19q";
import FrameComponent18 from "./FrameComponent18q";
import {useNavigate} from 'react-router-dom'

const FrameComponent15 = () => {
  const nav = useNavigate();

  return (
    <div className="absolute top-[50px] left-[20px] shadow-[0px_286px_80px_rgba(0,_0,_0,_0),_0px_183px_73px_rgba(0,_0,_0,_0.01),_0px_103px_62px_rgba(0,_0,_0,_0.05),_0px_46px_46px_rgba(0,_0,_0,_0.09),_0px_11px_25px_rgba(0,_0,_0,_0.1)] rounded-7xl bg-darkslategray-400 w-[406px] h-[961px] overflow-hidden text-left text-base text-white font-made-tommy">
      <div className="absolute top-[109px] left-[calc(50%_-_186px)] rounded-2xs bg-salmon w-[372px] h-11 flex flex-row items-center justify-center py-2.5 px-20 box-border gap-[10px]">
        <img
          className="w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[20px] h-6 overflow-hidden shrink-0 z-[0]"
          alt=""
          src="/ridashboardfillq.svg"
        />
        <div className="w-[81px] absolute !m-[0] top-[12px] left-[54px] font-medium inline-block z-[1]">
          Dashboard
        </div>
        <img
          className="w-4 absolute !m-[0] top-[calc(50%_-_4px)] right-[23.5px] rounded-12xs h-2 z-[2]"
          alt=""
          src="/vector-143q.svg"
        />
      </div>
      <div className="absolute top-[379px] left-[calc(50%_-_186px)] rounded-2xs bg-salmon w-[372px] h-10 flex flex-row items-center justify-center py-2.5 px-20 box-border gap-[10px]">
        <img
          className="w-5 absolute !m-[0] top-[10px] left-[20px] h-5 overflow-hidden shrink-0 z-[0]"
          alt=""
          src="/zondiconsaddsolidq.svg"
        />
        <div className="w-[106px] absolute !m-[0] top-[10px] left-[54px] font-medium inline-block z-[1]">
          Insert Product
        </div>
        <img
          className="w-4 absolute !m-[0] top-[calc(50%_-_4px)] right-[23.5px] rounded-12xs h-2 z-[2]"
          alt=""
          src="/vector-143q.svg"
        />
      </div>
      <FrameComponent19 />
      <img
        className="absolute top-[448px] left-[45.5px] rounded-12xs w-[11.5px] h-4 object-contain"
        alt=""
        src="/vector-144q.svg"
      />
      <div className="absolute top-[441px] left-[71px] text-5xl font-medium cursor-pointer" onClick={()=>{
        nav('/dashboard5')
      }}>
        Add Product
      </div>
      <div className="absolute top-[484px] left-[45.5px] rounded-10xs bg-gray-800 flex flex-row items-center justify-start py-0 px-3 gap-[14px] text-5xl">
        <img
          className="w-[11.5px] relative rounded-12xs h-4 object-contain"
          alt=""
          src="/vector-29q.svg"
        />
        <div className="relative font-medium cursor-pointer" onClick={()=>{
          nav('/dashboard4')
        }}>Product List</div>
      </div>
      <img
        className="absolute top-[78.5px] left-[calc(50%_-_186px)] max-h-full w-[371.5px]"
        alt=""
        src="/vector-26q.svg"
      />
      <div className="absolute top-[calc(50%_-_456.5px)] left-[calc(50%_-_121px)] text-17xl font-medium">
        Pari Collection
      </div>
      {/* <div className="absolute top-[559px] left-[calc(50%_-_186px)] rounded-2xs bg-salmon w-[372px] h-10 flex flex-row items-center justify-center py-2.5 px-20 box-border gap-[10px]">
        <img
          className="w-5 absolute !m-[0] top-[10px] left-[20px] h-5 overflow-hidden shrink-0 z-[0]"
          alt=""
          src="/zondiconsaddsolidq.svg"
        />
        <div className="w-[35px] absolute !m-[0] top-[10px] left-[54px] font-medium inline-block z-[1]">
          User
        </div>
        <img
          className="w-4 absolute !m-[0] top-[calc(50%_-_4px)] right-[23.5px] rounded-12xs h-2 z-[2]"
          alt=""
          src="/vector-143q.svg"
        />
      </div> */}
      {/* <FrameComponent18
        addProduct="Login"
        productList="Sign Up"
        propTop="621px"
        propWidth="87.5px"
        propRight="76px"
        propWidth1="113.5px"
        propRight1="102px"
      /> */}
    </div>
  );
};

export default FrameComponent15;
