import "../../static/styles/Comp1.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from 'react';

const Comp1 = () => {
  let [optionItems=["CS 1110", "CS 2110", "CS 3110", "CS 3410", "CS 4820", "CS 4410"], setOptionItems] = useState();
  const [optionItems2=["A-", "B+", "B", "B-", "A", "A-"], setOptionItems2] = useState();
  useEffect(() => {
    fetch('https://census-backend.herokuapp.com/get_median_home').then(res => res.json()).then(data => {
      const AS=data.retCourseInfo
      console.log(AS);
      setOptionItems(AS.map((info) => <p>{info[0]}</p>));
      setOptionItems2(AS.map((info2) => <h1>{info2[1]}</h1>));
    });

  }, []);

  return (
    <div className="outline">
      <div className="row">
        <div className="col">
          <div style={{}}>
          <br></br>
          <strong><p className="medianText">Course Medians</p></strong>
          <h3 className="bodyText">Access course information from over 700 courses offered at Cornell University. Browse data from historical course median to student enrollment.</h3>
          </div>
          
      

        </div>
        <div className="col" style={{}}>
                <Card className="card-t" style={{ borderRadius: 25, display: "inline-block", verticalAlign: "center" }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">{optionItems[0]}</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB" style={{}}>{optionItems2[0]}</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-t" style={{ borderRadius: 25, display: "inline-block", verticalAlign: "center" }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">{(optionItems[1])}</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB">{optionItems2[1]}</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-t" style={{ borderRadius: 25, display: "inline-block", verticalAlign: "center" }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">{(optionItems[2])}</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB">{optionItems2[2]}</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
        <div style={{}}>
         
                <Card className="card-t" style={{ borderRadius: 25, display: "inline-block", verticalAlign: "center" }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">{(optionItems[3])}</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB">{optionItems2[3]}</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-t" style={{ borderRadius: 25 , display: "inline-block", verticalAlign: "center"}}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">{(optionItems[4])}</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB">{optionItems2[4]}</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-t" style={{ borderRadius: 25, display: "inline-block", verticalAlign: "center" }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">{(optionItems[5])}</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB">{optionItems2[5]}</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Comp1;
