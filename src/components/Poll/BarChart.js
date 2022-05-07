import React from 'react';
import Chart from 'react-apexcharts';
import '../../static/styles/Donut.css';

const BarChart = ({pollData}) => {

    const labl = [];
    const val = [];

    pollData["opts"] = String(pollData["opts"]).replace(/\[|\]/g,'').split(',')
    pollData["val"] = String(pollData["val"]).replace(/\[|\]/g,'').split(',')

    for(let i = 0; i < pollData["opts"].length; i++){
      if(!pollData["opts"][i].includes("result") && !pollData["opts"][i].includes("Result")){
        labl.push(String(pollData["opts"][i]).replace(/[']+/g, ''));
        val.push(parseInt(String(pollData["val"][i]).replace(/[']+/g, ''), 0));
      }
    }

    
    var pollBar = {
      options: {
        chart: {
          type: 'bar'
        },
        plotOptions : {
          bar : {
            horizontal : true,
            borderRadius : 3,
          },
          dataLabels: {
            enabled: false
          }
        },
        xaxis: {
          categories : labl
        }
      },
      series: [{
        data: val
      }],
    }

    return (
      <div className="rowG">
         <div className="outlinez">
         <Chart options={pollBar.options} series={pollBar.series} type="bar" width="400" />
        </div>
      </div>
    );
}

export default BarChart;