import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent15 from "../components/FrameComponent15q";
import FrameComponent14 from "../components/FrameComponent14q";

const Dashboard2 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[1172px] overflow-hidden text-left text-5xl text-darkslategray-400 font-made-tommy">
      <FrameComponent20 dashboard="Product list" />
      <FrameComponent15 />
      <img
        className="absolute top-[214px] left-[485px] rounded-12xs w-[11.5px] h-4 object-contain"
        alt=""
        src="/vector-28q.svg"
      />
      <div className="absolute top-[207px] left-[500.5px] font-medium">
        Product List
      </div>
      <div className="absolute top-[253px] left-[500px] rounded-4xl bg-white box-border w-[1000px] h-[970px] overflow-hidden border-[1px] border-solid border-lightgray">
        <FrameComponent14 />
      </div>
    </div>
  );
};

export default Dashboard2;
