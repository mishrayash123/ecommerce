import { useMemo } from "react";
import ListBoxTitle from "./ListBoxTitle";
import PlaceholderText from "./PlaceholderText";
import DropdownList from "./DropdownList";

const ListboxComponent = ({
  chevron,
  propTop,
  propLeft,
  propHeight,
  propOpacity,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
}) => {
  const listboxComponentStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const dropdownListStyle = useMemo(() => {
    return {
      height: propHeight,
      opacity: propOpacity,
      backgroundColor: propBackgroundColor,
    };
  }, [propHeight, propOpacity, propBackgroundColor]);

  const property1Variant2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const property1Variant2Style1 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const property1Variant2Style2 = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  return (
    <div
      className="absolute top-[779px] left-[1347px] w-[308px] h-[289px]"
      style={listboxComponentStyle}
    >
      <ListBoxTitle
        listBoxTitleWidth="90.91%"
        listBoxTitleHeight="6.92%"
        listBoxTitlePosition="absolute"
        listBoxTitleTop="0%"
        listBoxTitleRight="4.55%"
        listBoxTitleBottom="93.08%"
        listBoxTitleLeft="4.55%"
      />
      <div className="absolute h-[20.76%] w-[90.91%] top-[9.69%] right-[4.55%] bottom-[69.55%] left-[4.55%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white" />
        <img
          className="absolute h-[8.33%] w-[3.57%] top-[46.67%] right-[7.86%] bottom-[45%] left-[88.57%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
          alt=""
          src={chevron}
        />
        <PlaceholderText
          placeholderTextWidth="65.71%"
          placeholderTextHeight="33.33%"
          placeholderTextPosition="absolute"
          placeholderTextTop="33.33%"
          placeholderTextRight="28.57%"
          placeholderTextBottom="33.33%"
          placeholderTextLeft="5.71%"
          selectSortingOptionOpacity="unset"
        />
      </div>
      <div className="absolute h-[90.31%] w-full top-[9.69%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
        <DropdownList
          dropdownListWidth="90.91%"
          dropdownListPosition="absolute"
          dropdownListTop="68px"
          dropdownListRight="4.55%"
          dropdownListLeft="4.55%"
          dropdownListHeight="1px"
          dropdownListOpacity="0"
          dropdownListBackgroundColor="unset"
          dropdownListBoxShadow="0px 4px 14px rgba(0, 0, 0, 0.1)"
          item1BackgroundColor="#fff"
          item2BackgroundColor="#fff"
          item3BackgroundColor="#fff"
          item4BackgroundColor="#fff"
        />
      </div>
    </div>
  );
};

export default ListboxComponent;
