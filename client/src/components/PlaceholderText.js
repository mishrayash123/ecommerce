import { useMemo } from "react";

const PlaceholderText = ({
  placeholderTextWidth,
  placeholderTextHeight,
  placeholderTextPosition,
  placeholderTextTop,
  placeholderTextRight,
  placeholderTextBottom,
  placeholderTextLeft,
  selectSortingOptionOpacity,
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

  const selectSortingOptionStyle = useMemo(() => {
    return {
      opacity: selectSortingOptionOpacity,
    };
  }, [selectSortingOptionOpacity]);

  return (
    <div
      className="w-[184px] h-5 text-left text-base text-dimgray-500 font-montserrat"
      style={placeholderTextStyle}
    >
      <div
        className="absolute top-[0%] left-[0%]"
        style={selectSortingOptionStyle}
      >
        Select Sorting Option
      </div>
    </div>
  );
};

export default PlaceholderText;
