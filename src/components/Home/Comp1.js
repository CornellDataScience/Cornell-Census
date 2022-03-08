import "../../static/styles/Comp1.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

const Comp1 = () => {
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
        <div className="col" style={{marginRight: "20px"}}>
          <br></br>
          <CardGroup className="card-g">
          <Row xs={2} md={3}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card className="card-t" style={{ borderRadius: 25 }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">CS 1110</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="gradeB">B+</h1>
                      </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </CardGroup>
          <CardGroup className="card-g">
          <Row xs={2} md={3}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card className="card-t" style={{ borderRadius: 25 }}>
                  <Card.Body>
                    <Card.Title><strong><p className="courseTitle">CS 2110</p></strong></Card.Title>
                    <Card.Text>
                      <div className="inBox">
                        <h1 className="grade">A-</h1>
                       </div> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </CardGroup>
        </div>
      </div>
    </div>
  )
}

export default Comp1;
