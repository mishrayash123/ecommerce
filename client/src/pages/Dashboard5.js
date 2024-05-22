import FrameComponent20 from "../components/FrameComponent20q";
import Sidebar from "../components/Sidebar";

const Dashboard5 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
      <FrameComponent20 dashboard="Today’s Visitors" />
      <Sidebar />
    </div>
  );
};

export default Dashboard5;
