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
          <br></br>
          <h1>Classes</h1>
          <h3>Access course information from student distribution to median grades</h3>
      

        </div>
        <div className="col">
          <br></br>
          <CardGroup className="card-g">
          <Row xs={2} md={3}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card className="card-t">
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      
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
                <Card className="card-t">
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      
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
