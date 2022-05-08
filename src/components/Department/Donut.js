import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import '../../static/styles/Donut.css';

const Donut = ({checks, classes}) => {

    const inc = new Array();
    for(let i =0; i < classes.length; i++){
      if(checks[i]) inc.push(classes[i]);
    }
    const grades = new Array();
    const classLevel = new Array();

    for(let i=0; i < inc.length; i++){
      grades.push(inc[i][2]);
      const cNum = parseInt(inc[i][0].split(" ")[1]);
      classLevel.push(Math.floor(cNum/1000)*1000);
    }
    
    const occurG = grades.reduce(function (acc, curr) {return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc}, {})
    const occurC = classLevel.reduce(function (acc, curr) {return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc}, {})


    var gradeDonut = {
      options: {
        labels: Object.keys(occurG)
      },
      series: Object.values(occurG),
      labels: Object.keys(occurG)
    }

    var classLDonut = {
      options: {
        labels: Object.keys(occurC)
      },
      series: Object.values(occurC),
      labels: Object.keys(occurC)
    }

    return (
      <div className="rowG">
         <div className="outlinez">
          <div className="upper2"><strong><p style={{paddingTop:"10px"}}>Median Grades</p></strong></div> 
         <Chart options={gradeDonut.options} series={gradeDonut.series} type="donut" width="400" />
        </div>
        <div className="outlinez">
        <div className="upper2"><strong><p style={{paddingTop:"10px"}}>Class Level</p></strong></div> 
        <Chart options={classLDonut.options} series={classLDonut.series} type="donut" width="400" />
        </div>
      </div>
    );
}

export default Donut;