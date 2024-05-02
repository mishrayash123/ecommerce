import MainHeader from "../components/MainHeaderq";
import FrameComponent5 from "../components/FrameComponent5q";
import FrameComponent1 from "../components/FrameComponent1q";
import FrameComponent from "../components/FrameComponentq";
import { useAuth } from "../AuthContext";

const TRACKORDER = () => {
  const email = localStorage.getItem("email");
  const {logout} = useAuth();


  return (
    <div className="w-full relative bg-white h-[2295px] overflow-hidden text-left text-lg text-black font-inter">
      <MainHeader />
      <FrameComponent5 />
      <div className="absolute top-[176px] left-[169px] bg-gainsboro-100 w-[313px] h-[79px] overflow-hidden text-center text-sm">
        <div className="absolute top-[22px] left-[22px] font-semibold">
          Email
        </div>
        <div className="absolute top-[42px] left-[22px] text-xs text-dimgray-300 text-left">
          {email}
        </div>
      </div>
      <div className="absolute top-[176px] left-[596px] font-made-tommy text-darkslategray-100">
        TRACKING ORDER
      </div>
      <div className="absolute top-[318px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden text-mini font-made-tommy border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light" style={{ fontFamily: 'Roboto', fontWeight:"bold" }}>
          Profile
        </div>
      </div>
      <div className="absolute top-[357px] left-[169px] bg-whitesmoke-200 box-border w-[313px] h-10 overflow-hidden text-mini font-made-tommy border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px]">
          Track Order
        </div>
      </div>
      <div className="absolute top-[396px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden text-mini font-made-tommy border-[1px] border-solid border-silver-300">
        <div className="absolute top-[calc(50%_-_9px)] left-[27px] font-light">
          FAQ
        </div>
      </div>
         {/*+ Logout Button */}
         <div className="absolute top-[480px] left-[169px] bg-white box-border w-[313px] h-10 overflow-hidden border-[1px] border-solid border-red-500 mt-4">
        <button className="w-full h-full flex justify-center items-center text-red-500 font-bold border border-red-500 rounded-md bg-white cursor-pointer" style={{ fontFamily: 'Roboto' }} onClick={logout}>
          Logout
        </button>
      </div>
      <FrameComponent1 />
      <div className="absolute top-[953px] left-[calc(50%_-_268px)] box-border w-[962px] h-[244px] overflow-hidden text-darkslategray-100 border-[1px] border-solid border-darkgray-600">
        <img
          className="absolute top-[124px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <img
          className="absolute top-[184px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <div className="absolute top-[82px] left-[23px] text-salmon">
          Discount
        </div>
        <div className="absolute top-[142px] left-[23px] text-black">
          Shipping Charges
        </div>
        <div className="absolute top-[202px] left-[23px] font-semibold">
          TOTAL AMOUNT
        </div>
        <b className="absolute top-[205px] left-[886px] text-base">₹599</b>
        <div className="absolute top-[145px] left-[908px] text-base">₹0</div>
        <img
          className="absolute top-[64px] left-[1px] max-h-full w-[961px]"
          alt=""
          src="/vector-20q.svg"
        />
        <div className="absolute top-[85px] left-[883px] text-base text-salmon">
          -₹100
        </div>
        <div className="absolute top-[30px] left-[888px] text-base">₹699</div>
        <div className="absolute top-[22px] left-[23px] text-black">
          <span>Cart Total </span>
          <span className="text-base">(Excl. of all taxes)</span>
        </div>
      </div>
      <FrameComponent />
      <div className="absolute top-[918px] left-[596px] text-xl text-gray-400">
        BILLING DETAILS
      </div>
      <div className="absolute top-[1278px] left-[596px] text-xl text-gray-400">
        DELIVERY
      </div>
      <div className="absolute top-[1326px] left-[596px] rounded-10xs bg-white box-border w-[962px] h-[202px] overflow-hidden text-darkslategray-800 border-[1px] border-solid border-darkgray-600">
        <div className="absolute top-[56px] left-[22px] font-semibold">
          Minisha Manoj
        </div>
        <div className="absolute top-[16px] left-[22px] text-xl font-semibold">
          Address
        </div>
        <div className="absolute top-[83px] left-[22px]">11/3</div>
        <div className="absolute top-[110px] left-[22px]">Kottai Street</div>
        <div className="absolute top-[137px] left-[22px]">Madurai</div>
        <div className="absolute top-[164px] left-[22px]">
          <span>{`Mobile: `}</span>
          <span className="font-semibold">1234567890</span>
        </div>
      </div>
    </div>
  );
};

export default TRACKORDER;
