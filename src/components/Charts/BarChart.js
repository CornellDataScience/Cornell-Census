import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['MATH 1910', 'MATH 1920','MATH 1930','MATH 1940','MATH 2910','MATH 2920','MATH 2930','MATH 2940','MATH 4712','MATH 4300','MATH 4311',]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1150"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;