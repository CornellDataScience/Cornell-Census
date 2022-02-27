import React from "react";
import { Line } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, optionChoice, w, h }) {
  return <Line data={chartData} options={optionChoice} width={w} height={h}/>;
}

export default LineChart;