import { useMemo } from "react";

const Property1Default2 = ({
  item,
  showItem,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultBackgroundColor,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultBackgroundColor,
  ]);

  return (
    <div
      className="bg-white h-11 overflow-hidden text-left text-base text-darkslategray-600 font-montserrat self-stretch"
      style={property1DefaultStyle}
    >
      {showItem && (
        <div className="absolute top-[12px] left-[16px]">{item}</div>
      )}
    </div>
  );
};

export default Property1Default2;
