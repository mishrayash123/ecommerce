import { Link } from 'react-router-dom';

const FrameComponent = () => {
  return (
    <div className='flex justify-center '>
    <div className='bg-gradient-to-b from-white to-bisque  rounded-3xl pt-5 mt-7 mb-6 md:pb-8 pb-5 w-full md:w-[95%] font-made-tommy'>
      <div className="p-2 flex flex-col md:flex-row  md:flex-wrap justify-between pl-8 pr-8">

        <div className='flex flex-col relative w-full md:w-auto mb-4 md:mb-0 rounded-lg'>
          <img
            className="w-full md:w-[219px] h-[262px] object-cover rounded-lg"
            alt=""
            src="/2150871198-1@2x.png" />
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <img
              className="w-6 relative h-6 mt-2 overflow-hidden shrink-0"
              alt=""
              src="/mingcutedownfill.svg" />
            <Link className='mt-6' to="/readymade-tshirt-women-page" style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="text-white text-xl relative">Readymade</b>
            </Link>
          </span>
        </div>

        <div className='flex flex-col relative w-full md:w-auto mb-4  md:mt-20 md:mb-0 rounded-lg'>
          <img
            className="w-full md:w-[219px] h-[262px] object-cover rounded-lg"
            alt=""
            src="/2150151066-1@2x.png" />
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Link className='mt-6' to="/undergarments-men-women1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="text-white text-xl relative">Undergarments</b>
            </Link>
          </span>
        </div>

        <div className='flex flex-col relative w-full md:w-auto mb-4 md:mb-0 rounded-lg'>
          <img
            className="w-full md:w-[219px] h-[262px] object-cover rounded-lg"
            alt=""
            src="/2148456279-1@2x.png" />
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Link className='mt-6' to="/thermal-women" style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="text-white text-xl relative">Thermal</b>
            </Link>
          </span>
        </div>

        <div className='flex flex-col relative w-full md:mt-20 md:w-auto rounded-lg'>
          <img
            className="w-full md:w-[219px] h-[262px] object-cover rounded-lg"
            alt=""
            src="/2148634166-1@2x.png" />
          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <img
              className="w-6 relative h-6 mt-2 overflow-hidden shrink-0"
              alt=""
              src="/mingcutedownfill.svg" />
            <Link className='mt-6' to="/accessories-arm-sleeves" style={{ textDecoration: 'none', color: 'inherit' }}>
              <b className="text-white text-xl relative">Accessories</b>
            </Link>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FrameComponent;