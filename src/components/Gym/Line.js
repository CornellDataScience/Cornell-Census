import React, { Component } from 'react';
import Chart from 'react-apexcharts';

const Line = ({gym_data}) => {

    const allD = new Array();
    const tLabel = ["6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm","12:00am",
    "1:00am","2:00am","3:00am","4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am",
    "11:00am","12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm"];

    const timeLabel = new Array();
    for(let i = 0; i < tLabel.length*4; i++){
      timeLabel.push(tLabel[Math.floor(i/4)])
    }

    for(let i in gym_data){
      const gym1 = new Array();
      var counter = 0;
      for(let j in gym_data[i]){
        gym1.push([counter, parseInt(gym_data[i][j][1])])
        counter++;
      }
      allD.push(gym1)
    }
    console.log(gym_data)
    var hnhc1 = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        labels: ["HNH Court 1", "HNH Court 2", "Helen Newman Fitness Center","Noyes Fitness Center",
      "Teagle Down Fitness Center", "Teagle Up Fitness Center","Toni Morrison Fitness Center"]
      },
      series: [{
        type: 'line',
        data: allD[0]
      }, {
        type: 'line',
        data: allD[1]
      },{
        type: 'line',
        data: allD[2]
      },{
        type: 'line',
        data: allD[3]
      },{
        type: 'line',
        data: allD[4]
      },{
        type: 'line',
        data: allD[5]
      },{
        type: 'line',
        data: allD[6]
      }]
    }

    return (
        <div>
         <Chart options={hnhc1.options} series={hnhc1.series} type="line" width="1500" height = "800" />
        </div>

    );
}

export default Line;