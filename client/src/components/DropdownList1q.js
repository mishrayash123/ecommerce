import { useMemo } from "react";

const DropdownList1 = ({
  prop,
  showDiv,
  dropdownListWidth,
  dropdownListBoxShadow,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  item1BackgroundColor,
  item2BackgroundColor,
  item3BackgroundColor,
  item4BackgroundColor,
  showItem,
}) => {
  const dropdownListStyle = useMemo(() => {
    return {
      width: dropdownListWidth,
      boxShadow: dropdownListBoxShadow,
      position: dropdownListPosition,
      top: dropdownListTop,
      right: dropdownListRight,
      left: dropdownListLeft,
    };
  }, [
    dropdownListWidth,
    dropdownListBoxShadow,
    dropdownListPosition,
    dropdownListTop,
    dropdownListRight,
    dropdownListLeft,
  ]);

  const item1Style = useMemo(() => {
    return {
      backgroundColor: item1BackgroundColor,
    };
  }, [item1BackgroundColor]);

  const item2Style = useMemo(() => {
    return {
      backgroundColor: item2BackgroundColor,
    };
  }, [item2BackgroundColor]);

  const item3Style = useMemo(() => {
    return {
      backgroundColor: item3BackgroundColor,
    };
  }, [item3BackgroundColor]);

  const item4Style = useMemo(() => {
    return {
      backgroundColor: item4BackgroundColor,
    };
  }, [item4BackgroundColor]);

  return (
    <div
      className="w-[280px] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-lg overflow-hidden flex flex-col items-center justify-center gap-[1px] text-left text-base text-darkslategray-600 font-montserrat"
      style={dropdownListStyle}
    >
      <div
        className="self-stretch relative bg-white h-[37px] overflow-hidden shrink-0"
        style={item1Style}
      >
        <div className="absolute top-[12px] left-[16px]">Yesterday</div>
      </div>
      <div
        className="self-stretch relative bg-white h-[37px] overflow-hidden shrink-0"
        style={item2Style}
      >
        <div className="absolute top-[12px] left-[16px]">{prop}</div>
      </div>
      <div
        className="self-stretch relative bg-white h-[37px] overflow-hidden shrink-0"
        style={item3Style}
      >
        {showDiv && (
          <div className="absolute top-[12px] left-[16px]">Last Month</div>
        )}
      </div>
      <div
        className="self-stretch relative bg-white h-[37px] overflow-hidden shrink-0"
        style={item4Style}
      >
        <div className="absolute top-[12px] left-[16px]">Last Year</div>
      </div>
    </div>
  );
};

export default DropdownList1;
