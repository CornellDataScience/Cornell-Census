// import React, { useState, useEffect } from 'react';
import '../static/styles/Home.css';
import '../static/styles/master.css';
import '../static/styles/Poll.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import BarChart from '../components/Poll/BarChart';


const Poll = () =>  {
  
  const [pollItem, setPollItems] = useState();

  useEffect(() => {
    fetch('/get_polls').then(res => res.json()).then(data => {
      const PI = data.pollInfo
      console.log(PI)
      setPollItems(PI.map((info) => 
              <Card className="card-zt">
                <Card.Title style={{paddingTop:"20px"}}><b>{info["title"]}</b></Card.Title>
                <Card.Body>
                  <BarChart pollData={info}/>
                </Card.Body>
              </Card>
            ));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grad">
        <div className="upper">
          <strong><p style={{fontSize:"70px"}}>Current Polls</p></strong>
        </div>
        <Row className="card-gr" xs={2} md={3}>
            {pollItem}
        </Row>
        <Footer/>
        <br></br>
      </div>
    </div>
  );
}

export default Poll;
