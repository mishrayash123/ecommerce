import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent13 from "../components/FrameComponent13q";
import FrameComponent12 from "../components/FrameComponent12q";
import FrameComponent11 from "../components/FrameComponent11q";

const Dashboard3 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
      <FrameComponent20 dashboard="Dashboard" />
      <FrameComponent13 />
      <FrameComponent12
        todaysSales="Today’s Sales"
        prop="+20%"
        thanLastWeek=" than last week"
        prop1="₹30,000"
        frame92="/frame-921q.svg"
        prop2="Last Week"
        showListBoxTitle={false}
        showDiv={false}
        showItem
        showDiv1={false}
      />
      <FrameComponent11 k="50K" k1="40K" k2="30K" k3="20K" k4="10K" />
    </div>
  );
};

export default Dashboard3;
