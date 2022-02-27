import "../../static/styles/Comp2.css"
//import LineChart from "../Charts/LineChart.js"

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#000000"
    }
  ],
};

const op = {
  plugins:{
    legend: 
      {
        display: false
      }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
};

const w = "30%";
//<LineChart chartData={data} optionChoice={op} width={w}/>
const Comp2 = () => {
  return (
    <div className="outline">
      <h1>test</h1>
    </div>
  )
}

export default Comp2;
