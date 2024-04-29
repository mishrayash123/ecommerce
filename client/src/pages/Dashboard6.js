import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent7 from "../components/FrameComponent7q";
import FrameComponent12 from "../components/FrameComponent12q";
import FrameComponent8 from "../components/FrameComponent8q";

const Dashboard6 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
      <FrameComponent20 dashboard="Dashboard" />
      <FrameComponent7 />
      <FrameComponent12
        todaysSales="Nwe Clients"
        prop="+4%"
        thanLastWeek=" than last Month"
        prop1="100"
        frame92="/frame-94q.svg"
        prop2="Last Week"
        propColor="#005ac2"
        showListBoxTitle={false}
        showDiv={false}
        showItem
        showDiv1={false}
      />
      <FrameComponent8
        prop="250"
        prop1="200"
        prop2="150"
        prop3="100"
        prop4="50"
        propBackgroundColor="#005ac2"
        propTop="320px"
        propHeight="67px"
        propTop1="333px"
        propHeight1="54px"
        propTop2="333px"
        propHeight2="54px"
        propTop3="354px"
        propHeight3="33px"
      />
    </div>
  );
};

export default Dashboard6;
