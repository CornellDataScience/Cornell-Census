import '../static/styles/master.css';
import '../static/styles/Explore.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import square from '../static/img/temp_square.png';


function Explore() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <h1 className="upper">Explore Cornell Census</h1>
        <Row className="card-gr" xs={2} md={3}>
          <Card className="card-zt"><br></br>
            <Card.Title><h2>Courses</h2></Card.Title> 
            <img src={square} width={200}></img>
            
            <a href="/department"><strong><p className="discover2">See All Courses</p></strong></a>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><h2>Professors</h2></Card.Title>
          <img src={square} width={200}></img>
          <Row className="alty" xs ={3}>
          <a href="/50best"><strong><p className="discover2">Top 50</p></strong></a>
          <a href="/50worst"><strong><p className="discover2">Bot 50</p></strong></a>
          <a href="/professorranking"><strong><p className="discover2">Sorted</p></strong></a>
          </Row>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><h2>Gym</h2></Card.Title>
          <img src={square} width={200}></img>
          <a href="/gym"><strong><p className="discover2">See Gym Data</p></strong></a>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><h2>Polls</h2></Card.Title>
          <img src={square} width={200}></img>
          <a href="/poll"><strong><p className="discover2">See All Polls</p></strong></a>
          </Card>
        </Row>

        <div className="cds">
          In collaboration with Cornell Data Science.
          <Footer />
          <br></br>
        </div>

      </div>
    </div>
  );
}

export default Explore;