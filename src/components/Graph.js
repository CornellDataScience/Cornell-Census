import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import '../static/styles/main.css';
//import { UserData } from "./Data";

function Graph() {
  const userData = {
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        label: "Users Gained",
        data: [5, 6, 7, 8, 9],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="graphPage">
      <div className="depChar">
      <div className="barChar" style={{ width: 400 }}>
        <BarChart chartData={userData} />
      </div>
      <div className="pieChar" style={{ width: 300 }}>
        <PieChart chartData={userData} />
      </div>
      <div className="lineChar" style={{ width: 400 }}>
        <LineChart chartData={userData} />
      </div>
      </div>
    </div>
  );
}

export default Graph;