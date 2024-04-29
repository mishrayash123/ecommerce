import { useMemo } from "react";

const Property1Default1 = ({ item, property1DefaultPosition }) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div
      className="bg-white h-11 overflow-hidden text-left text-base text-darkslategray-600 font-montserrat self-stretch"
      style={property1Default1Style}
    >
      <div className="absolute top-[12px] left-[16px]">{item}</div>
    </div>
  );
};

export default Property1Default1;
