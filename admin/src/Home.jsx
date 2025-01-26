import Chart from "./Chart";
import Featured from "./Featured";
import LargeWidget from "./LargeWidget";
import SmallWidget from "./SmallWidget";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Home = () => {
  
  const months = useMemo(() =>
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], []);
    
    const [usersStats, setUsersStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/stats`,{
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          }
        });

        const statsList = res.data.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map(item=>setUsersStats(prev=>[...prev, {name: months[item._id - 1], "Total User": item.total}]))
      } catch (error) {
        console.log(error);
      }
    }
    getStats();
  }, [months]);

  

  return (
    <div className="flex-[6_6_0%]">
        <Featured />
        <Chart data={usersStats} title="User Analytics" grid dataKey="Total User" />
        <div className="flex m-5">
          <SmallWidget />
          <LargeWidget />
        </div>
    </div>
  )
}
export default Home