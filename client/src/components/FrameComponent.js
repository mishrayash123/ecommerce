import { Link } from 'react-router-dom';

const FrameComponent = () => {
  return (
    <div className="absolute top-[198px] left-[calc(50%_-_752px)] rounded-7xl bg-bisque w-[1504px] h-[388px] overflow-hidden text-left text-5xl text-white font-made-tommy">
      <img
        className="absolute top-[63px] left-[821px] rounded-31xl w-[219px] h-[262px] object-cover"
        alt=""
        src="/2148456279-1@2x.png"
      />
      <img
        className="absolute top-[63px] left-[1178px] rounded-31xl w-[219px] h-[262px] object-contain"
        alt=""
        src="/2148634166-1@2x.png"
      />
      <img
        className="absolute top-[63px] left-[107px] rounded-31xl w-[219px] h-[262px] object-cover"
        alt=""
        src="/2150871198-1@2x.png"
      />
      <img
        className="absolute top-[63px] left-[464px] rounded-31xl w-[219px] h-[262px] object-cover"
        alt=""
        src="/2150151066-1@2x.png"
      />
      <div className="absolute top-[255px] left-[485px] flex flex-row items-start justify-start">
      <Link to="/undergarments-men-women1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Undergarments</b>
          </Link>
      </div>
      <div className="absolute top-[255px] left-[135px] flex flex-row items-start justify-start gap-[5px] text-center">
      <Link to="/readymade-tshirt-women-page" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Readymade</b>
          </Link>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/mingcutedownfill.svg"
        />
      </div>
      <div className="absolute top-[255px] left-[885px] flex flex-row items-start justify-start">
      <Link to="/thermal-women" style={{ textDecoration: 'none', color: 'inherit' }}>
    <b className="relative">Thermal</b>
  </Link>
      </div>
      <div className="absolute top-[255px] left-[1205px] flex flex-row items-center justify-start gap-[5px] text-center">
      <Link to="/accessories-arm-sleeves" style={{ textDecoration: 'none', color: 'inherit' }}>
          <b className="relative">Accessories</b>
          </Link>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/mingcutedownfill.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
