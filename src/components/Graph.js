import BarChart from "./Charts/BarChart";
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
      <div className="barChar">
        <BarChart chartData={userData} />
      </div>
      </div>
    </div>
  );
}

export default Graph;