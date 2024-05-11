import MainHeader from "../components/MainHeader";
import FrameComponent1 from "../components/FrameComponent1";
import Component from "../components/Component";

const WISHLISTPAGE = () => {
  return (
    <div className="w-full relative bg-white h-[1588px] overflow-hidden text-left text-9xl text-black font-inter">
                                         <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />
      <b className="absolute top-[767px] left-[calc(50%_-_289px)]">
        Your wishlist is lonely and looking for love.
      </b>
      <div className="absolute top-[147px] left-[calc(50%_-_755px)]">
        <span className="font-semibold">My Orders</span>
        <b> </b>
        <span>(0 items)</span>
      </div>
      <div className="absolute top-[817px] left-[calc(50%_-_429px)] text-5xl">
        Add products to your wishlist, review them anytime and easily move to
        cart.
      </div>
      <div className="absolute top-[895px] left-[calc(50%_-_130px)] rounded-8xs bg-salmon-200 flex flex-row items-center justify-center py-3 px-[23px] text-xl text-salmon-100 border-[1px] border-solid border-salmon-100">
        <div className="relative font-medium">CONTINUE SHOPPING</div>
      </div>
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
      <Component />
    </div>
  );
};

export default WISHLISTPAGE;
