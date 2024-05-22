import FrameComponent20 from "../components/FrameComponent20q";
import Sidebar from "../components/Sidebar";

const Dashboard3 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
       <FrameComponent20 dashboard="Today’s Sales" />
      <Sidebar />
    </div>
  );
};

export default Dashboard3;
