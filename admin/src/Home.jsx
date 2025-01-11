import Chart from "./Chart";
import Featured from "./Featured";
import LargeWidget from "./LargeWidget";
import SmallWidget from "./SmallWidget";
import { userData } from "./seeds/dummyData";

const Home = () => {
  return (
    <div className="flex-[6_6_0%]">
        <Featured />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="flex m-5">
          <SmallWidget />
          <LargeWidget />
        </div>
    </div>
  )
}
export default Home