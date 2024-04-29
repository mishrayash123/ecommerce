import { useMemo } from "react";

const PlaceholderText1 = ({
  placeholderTextWidth,
  placeholderTextHeight,
  placeholderTextPosition,
  placeholderTextTop,
  placeholderTextRight,
  placeholderTextBottom,
  placeholderTextLeft,
  selectFilterOpacity,
}) => {
  const placeholderTextStyle = useMemo(() => {
    return {
      width: placeholderTextWidth,
      height: placeholderTextHeight,
      position: placeholderTextPosition,
      top: placeholderTextTop,
      right: placeholderTextRight,
      bottom: placeholderTextBottom,
      left: placeholderTextLeft,
    };
  }, [
    placeholderTextWidth,
    placeholderTextHeight,
    placeholderTextPosition,
    placeholderTextTop,
    placeholderTextRight,
    placeholderTextBottom,
    placeholderTextLeft,
  ]);

  const selectFilterStyle = useMemo(() => {
    return {
      opacity: selectFilterOpacity,
    };
  }, [selectFilterOpacity]);

  return (
    <div
      className="w-[184px] h-5 text-left text-base text-dimgray-200 font-montserrat"
      style={placeholderTextStyle}
    >
      <div className="absolute top-[0%] left-[0%]" style={selectFilterStyle}>
        Select Filter
      </div>
    </div>
  );
};

export default PlaceholderText1;
