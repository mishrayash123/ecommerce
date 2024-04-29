import { useMemo } from "react";

const FrameComponent18 = ({
  addProduct,
  productList,
  propTop,
  propWidth,
  propRight,
  propWidth1,
  propRight1,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const vectorIconStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const vectorIcon1Style = useMemo(() => {
    return {
      right: propRight1,
    };
  }, [propRight1]);

  return (
    <div
      className="absolute top-[441px] left-[45.5px] flex flex-col items-start justify-start gap-[13px] text-left text-5xl text-white font-made-tommy"
      style={frameDiv6Style}
    >
      <div className="w-[167.5px] relative h-[30px]" style={groupDivStyle}>
        <div className="absolute top-[0px] left-[25.5px] font-medium">
          {addProduct}
        </div>
        <img
          className="absolute top-[calc(50%_-_7px)] right-[156px] rounded-12xs w-[11.5px] h-4 object-contain"
          alt=""
          src="/vector-29q.svg"
          style={vectorIconStyle}
        />
      </div>
      <div className="w-[159.5px] relative h-[30px]" style={groupDiv1Style}>
        <div className="absolute top-[0px] left-[25.5px] font-medium">
          {productList}
        </div>
        <img
          className="absolute top-[calc(50%_-_7px)] right-[148px] rounded-12xs w-[11.5px] h-4 object-contain"
          alt=""
          src="/vector-29q.svg"
          style={vectorIcon1Style}
        />
      </div>
    </div>
  );
};

export default FrameComponent18;
