import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent15 from "../components/FrameComponent15q";
import FrameComponent14 from "../components/FrameComponent14q";
import Sidebar from "../components/Sidebar";

const Dashboard2 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[1172px] overflow-hidden text-left text-5xl text-darkslategray-400 font-made-tommy">
      {/* <FrameComponent20 dashboard="Product list" />
      <FrameComponent15 /> */}
      
      {/* <FrameComponent7 /> */}
      <div className="flex lg:flex-row md:flex-row flex-col ">
      <Sidebar />
      <div className="flex flex-col">
      <FrameComponent20 dashboard="Product list" />
      <div className="flex flex-row justify-between">
      <div></div>
      <div className=" rounded-4xl bg-white box-border overflow-hidden border-[1px] border-solid border-lightgray">
        <FrameComponent14 />
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard2;
