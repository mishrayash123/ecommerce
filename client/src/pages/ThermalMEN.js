import Header from "../components/Header";
import ListboxComponent from "../components/ListboxComponent";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent8 from "../components/FrameComponent8";
import GroupComponent5 from "../components/GroupComponent5";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent1 from "../components/FrameComponent1";

const ThermalMEN = () => {
  return (
    <div className="w-full relative bg-white h-[2873px] overflow-hidden text-left text-base text-dimgray-300 font-poppins">
      <img
        className="absolute top-[89px] left-[-2px] w-[2295px] h-[588px] object-cover"
        alt=""
        src="/image-29@2x.png"
      />
      <Header
        solarbagOutline="/solarbagoutline1.svg"
        basilnotificationOutline="/phheart.svg"
        codiconaccount="/codiconaccount.svg"
        ionsearch="/ionsearch.svg"
        propLeft="0px"
        propBackgroundColor="#ffbb64"
        propBackgroundColor1="#ffeaa7"
        propColor="#8a8a8a"
        propColor1="#000"
        propColor2="#000"
        propBackgroundColor2="#ff6868"
        propTop="calc(50% - 22.5px)"
        propTop1="calc(50% - 22.5px)"
        propTop2="calc(50% - 22.5px)"
      />
      <div className="absolute top-[89px] left-[1301px] shadow-[1px_7px_11.4px_rgba(0,_0,_0,_0.25)] rounded-t-none rounded-b-11xl bg-salmon-100 flex flex-row items-start justify-start gap-[10px] text-9xl text-white font-made-tommy">
        <div className="rounded-t-none rounded-br-none rounded-bl-11xl bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">MEN</div>
        </div>
        <div className="bg-salmon-100 flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">WOMEN</div>
        </div>
        <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
          <div className="relative font-medium">KIDS</div>
        </div>
      </div>
      <div className="absolute top-[700px] left-[calc(50%_-_95px)] rounded-2xl bg-darkgray-900 h-[23px] flex flex-row items-start justify-start pt-1.5 px-3 pb-[7px] box-border gap-[28px]">
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
        <div className="w-[15px] relative rounded-[50%] box-border h-[15px] border-[3px] border-solid border-gray-900" />
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
        <div className="w-2.5 relative rounded-[50%] bg-gray-900 h-2.5" />
      </div>
      <ListboxComponent
        chevron="/chevron.svg"
        propTop="816px"
        propLeft="1333px"
        propHeight="1px"
        propOpacity="0"
        propBackgroundColor="unset"
        propBackgroundColor1="#fff"
        propBackgroundColor2="#fff"
        propBackgroundColor3="#fff"
      />
      <div className="absolute top-[833px] left-[500px] text-xl text-black">
        Women T-Shirt
      </div>
      <div className="absolute top-[835px] left-[684px] rounded-10xl flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-darkgray-100">
        <div className="relative">Men Base Layer</div>
        <img
          className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/phx.svg"
        />
      </div>
      <FrameComponent9
        activewear="Activewear"
        menBaseLayer="Men Base Layer"
        menActivewear="Men Activewear"
        frame39="/frame-39.svg"
        showFrameDiv
      />
      <FrameComponent4 propTop="1626px" propHeight="371px" />
      <FrameComponent8 showFrameDiv />
      <GroupComponent5
        image9="/image-32@2x.png"
        chinos="POLOS"
        dontCareClub={`Power Up (Black & Blue)`}
        prop="₹899"
        solarbagOutline="/solarbagoutline6.svg"
        propTop="946px"
        propLeft="503px"
        propTop1="0px"
        propHeight="390px"
        propLeft1="calc(50% - 174px)"
        propWidth="348px"
      />
      <GroupComponent3
        image3="/image-33@2x.png"
        musicRoundedMenTshirt="Captain America: The Suit"
        prop="₹699"
        solarbagOutline="/solarbagoutline.svg"
        propTop="-26px"
        propHeight="416px"
      />
      <FrameComponent1
        frame10="/frame-10.svg"
        frame11="/frame-11.svg"
        frame12="/frame-12.svg"
        frame14="/frame-14.svg"
        propTop="unset"
        propBottom="0px"
        propBackgroundColor="#ff6868"
        propBackgroundColor1="#ebebeb"
        propBackgroundColor2="#ff6868"
      />
      <div className="absolute top-[778px] left-[490px]">Home / Thermal</div>
    </div>
  );
};

export default ThermalMEN;