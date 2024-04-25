import { useMemo } from "react";

const Property1Variant = ({
  item,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
  propBackgroundColor,
  propFontWeight,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
      backgroundColor: propBackgroundColor,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propAlignSelf,
    propBackgroundColor,
  ]);

  const itemStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  return (
    <div
      className="absolute top-[103px] left-[20px] bg-white w-[280px] h-11 overflow-hidden text-left text-base text-darkslategray-300 font-montserrat"
      style={property1Variant2Style}
    >
      <div
        className="absolute top-[12px] left-[16px] font-medium"
        style={itemStyle}
      >
        {item}
      </div>
    </div>
  );
};

export default Property1Variant;
