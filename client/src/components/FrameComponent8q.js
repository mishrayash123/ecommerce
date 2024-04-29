import { useMemo } from "react";

const FrameComponent8 = ({
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  propBackgroundColor,
  propTop,
  propHeight,
  propTop1,
  propHeight1,
  propTop2,
  propHeight2,
  propTop3,
  propHeight3,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop1,
      height: propHeight1,
    };
  }, [propTop1, propHeight1]);

  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop2,
      height: propHeight2,
    };
  }, [propTop2, propHeight2]);

  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop3,
      height: propHeight3,
    };
  }, [propTop3, propHeight3]);

  return (
    <div
      className="absolute top-[389px] left-[572px] rounded-4xl bg-mediumvioletred w-[1043px] h-[457px] overflow-hidden text-left text-lg text-white font-made-tommy"
      style={frameDivStyle}
    >
      <div
        className="absolute top-[292px] left-[169px] bg-white w-[30px] h-[95px] overflow-hidden"
        style={frameDiv1Style}
      />
      <div
        className="absolute top-[229px] left-[407px] bg-white w-[30px] h-[158px] overflow-hidden"
        style={frameDiv2Style}
      />
      <div
        className="absolute top-[261px] left-[646px] bg-white w-[30px] h-[126px] overflow-hidden"
        style={frameDiv3Style}
      />
      <div
        className="absolute top-[210px] left-[887px] bg-white w-[30px] h-[177px] overflow-hidden"
        style={frameDiv4Style}
      />
      <div className="absolute top-[400px] left-[calc(50%_-_368px)] flex flex-row items-start justify-start gap-[177px]">
        <div className="relative font-medium">Week 1</div>
        <div className="relative font-medium">Week 2</div>
        <div className="relative font-medium">Week 3</div>
        <div className="relative font-medium">Week 4</div>
      </div>
      <div className="absolute top-[53px] left-[40px] flex flex-col items-start justify-start gap-[41px] text-xl">
        <div className="relative font-medium">{prop}</div>
        <div className="relative font-medium">{prop1}</div>
        <div className="relative font-medium">{prop2}</div>
        <div className="relative font-medium">{prop3}</div>
        <div className="relative font-medium">{prop4}</div>
      </div>
      <img
        className="absolute top-[386.5px] left-[-18.5px] max-h-full w-[1083.5px]"
        alt=""
        src="/vector-57q.svg"
      />
      <img
        className="absolute top-[-236.7px] left-[113.8px] max-w-full overflow-hidden h-[1083.5px] object-contain"
        alt=""
        src="/vector-58q.svg"
      />
    </div>
  );
};

export default FrameComponent8;
