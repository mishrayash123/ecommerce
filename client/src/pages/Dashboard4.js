import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent10 from "../components/FrameComponent10q";
import FrameComponent12 from "../components/FrameComponent12q";
import FrameComponent11 from "../components/FrameComponent11q";
import Sidebar from "../components/Sidebar";

const Dashboard4 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
      <FrameComponent20 dashboard="Today’s Order" />
      {/* <FrameComponent7 /> */}
      <Sidebar />
      {/* <FrameComponent12
        todaysSales="Today’s Order"
        prop="+20%"
        thanLastWeek=" than last week"
        prop1="590"
        frame92="/frame-93q.svg"
        prop2="Last Week"
        propColor="#9000c2"
        showListBoxTitle={false}
        showDiv={false}
        showItem
        showDiv1={false}
      />
      <FrameComponent11
        k="1000"
        k1="800"
        k2="600"
        k3="400"
        k4="200"
        propBackgroundColor="#9000c2"
      /> */}
    </div>
  );
};

export default Dashboard4;
