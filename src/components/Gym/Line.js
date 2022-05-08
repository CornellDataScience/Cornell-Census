import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Line = ({gym_data}) => {

    const hLabel = ["HNH Court 1", "HNH Court 2", "Helen Newman Fitness Center","Noyes Fitness Center",
    "Teagle Down Fitness Center", "Teagle Up Fitness Center","Toni Morrison Fitness Center"]

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

    var hnhc1 = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#122C91"]
      },
      series: [{
        name: hLabel[0],
        type: 'line',
        data: allD[0]
      }]
    }
    var hnhc2 = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#E74645"]
      },
      series: [{
        name: hLabel[1],
        type: 'line',
        data: allD[1]
      }]
    }
    var hnfc = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#FB7756"]
      },
      series: [{
        name: hLabel[2],
        type: 'line',
        data: allD[2]
      }]
    }
    var nfc = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#FACD60"]
      },
      series: [{
        name: hLabel[3],
        type: 'line',
        data: allD[3]
      }]
    }
    var tdfc = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#FDFA66"]
      },
      series: [{
        name: hLabel[4],
        type: 'line',
        data: allD[4]
      }]
    }
    var tufc = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#1AC0C6"]
      },
      series: [{
        name: hLabel[5],
        type: 'line',
        data: allD[5]
      }]
    }
    var tmfc = {
      options: {
        xaxis: {
          categories: timeLabel,
          tickAmount: 24,
        },
        markers: {
          size: 2
        },
        colors: ["#FF4D4D"]
      },
      series: [{
        name: hLabel[6],
        type: 'line',
        data: allD[6]
      }]
    }

    return (
        <div>
          <Row className="card-gr" xs={3}>
          <Card className="card-zt"><br></br>
            <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[0]}</p></strong></Card.Title>
          <Chart options={hnhc1.options} series={hnhc1.series} type="line" height={350} width={500}/>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[1]}</p></strong></Card.Title>
          <Chart options={hnhc2.options} series={hnhc2.series} type="line" height={350} width={500}/>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[2]}</p></strong></Card.Title>
          <Chart options={hnfc.options} series={hnfc.series} type="line" height={350} width={500}/>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[3]}</p></strong></Card.Title>
          <Chart options={nfc.options} series={nfc.series} type="line" height={350} width={500}/>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[4]}</p></strong></Card.Title>
          <Chart options={tdfc.options} series={tdfc.series} type="line" height={350} width={500}/>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[5]}</p></strong></Card.Title>
          <Chart options={tufc.options} series={tufc.series} type="line" height={350} width={500}/>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"15px"}}>{hLabel[6]}</p></strong></Card.Title>
          <Chart options={tmfc.options} series={tmfc.series} type="line" height={350} width={500}/>
          </Card>
          </Row>
        </div>

    );
}

export default Line;