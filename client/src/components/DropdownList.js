import { useMemo } from "react";
import Property1Variant from "./Property1Variant";

const DropdownList = ({
  dropdownListWidth,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
  dropdownListBackgroundColor,
  dropdownListBoxShadow,
  item1BackgroundColor,
  item2BackgroundColor,
  item3BackgroundColor,
  item4BackgroundColor,
}) => {
  const dropdownListStyle = useMemo(() => {
    return {
      width: dropdownListWidth,
      position: dropdownListPosition,
      top: dropdownListTop,
      right: dropdownListRight,
      left: dropdownListLeft,
      height: dropdownListHeight,
      opacity: dropdownListOpacity,
      backgroundColor: dropdownListBackgroundColor,
      boxShadow: dropdownListBoxShadow,
    };
  }, [
    dropdownListWidth,
    dropdownListPosition,
    dropdownListTop,
    dropdownListRight,
    dropdownListLeft,
    dropdownListHeight,
    dropdownListOpacity,
    dropdownListBackgroundColor,
    dropdownListBoxShadow,
  ]);

  const property1Variant2Style = useMemo(() => {
    return {
      backgroundColor: item1BackgroundColor,
    };
  }, [item1BackgroundColor]);

  const property1Variant2Style1 = useMemo(() => {
    return {
      backgroundColor: item2BackgroundColor,
    };
  }, [item2BackgroundColor]);

  const property1Variant2Style2 = useMemo(() => {
    return {
      backgroundColor: item3BackgroundColor,
    };
  }, [item3BackgroundColor]);

  const property1Variant2Style3 = useMemo(() => {
    return {
      backgroundColor: item4BackgroundColor,
    };
  }, [item4BackgroundColor]);

  return (
    <div
      className="w-[280px] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-lg overflow-hidden flex flex-col items-center justify-center gap-[1px]"
      style={dropdownListStyle}
    >
      <Property1Variant
        item="Price - High to Low"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propBackgroundColor="#fff"
        propFontWeight="unset"
      />
      <Property1Variant
        item="Price - Low to High"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propBackgroundColor="#fff"
        propFontWeight="unset"
      />
      <Property1Variant
        item="Newest"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propBackgroundColor="#fff"
        propFontWeight="unset"
      />
      <Property1Variant
        item="Popularity"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
        propBackgroundColor="#fff"
        propFontWeight="unset"
      />
    </div>
  );
};

export default DropdownList;
