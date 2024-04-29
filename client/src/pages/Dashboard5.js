import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent9 from "../components/FrameComponent9q";
import FrameComponent12 from "../components/FrameComponent12q";
import FrameComponent8 from "../components/FrameComponent8q";

const Dashboard5 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
      <FrameComponent20 dashboard="Dashboard" />
      <FrameComponent9 />
      <FrameComponent12
        todaysSales="Today’s Visitors"
        prop="+3%"
        thanLastWeek=" than last Month"
        prop1="4000"
        frame92="/frame-92q.svg"
        prop2="Last month"
        propColor="#9000c2"
        showListBoxTitle={false}
        showDiv={false}
        showItem
        showDiv1={false}
      />
      <FrameComponent8
        prop="2500"
        prop1="2000"
        prop2="1500"
        prop3="1000"
        prop4="500"
      />
    </div>
  );
};

export default Dashboard5;
