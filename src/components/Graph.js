import BarChart from "./BarChart";
//import LineChart from "./components/LineChart";
//import PieChart from "./components/PieChart";
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
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="graphPage">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default Graph;