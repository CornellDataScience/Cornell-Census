import '../static/styles/master.css';
import '../static/styles/Explore.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import square from '../static/img/temp_square.png';
import gym from '../static/img/gymIcon.png';
import poll from '../static/img/pollIcon.png';
import prof from '../static/img/profIcon.png';
import course from '../static/img/courseIcon.png';

function Explore() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <strong><p style={{textAlign: "center", fontSize:"50px", color:"white", paddingTop:"20px"}}>Explore CornellCensus</p></strong>
        <Row className="card-gr" xs={2} md={3}>
          <Card className="card-zt"><br></br>
            <Card.Title><strong><p style={{paddingTop:"20px", fontSize:"35px", color:"#1976d2"}}>Courses</p></strong></Card.Title> 
            <img src={course} width={200}></img>
            
            <a href="/department"><strong><p className="discover2">See All Courses</p></strong></a>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"20px", fontSize:"35px", color:"#1976d2"}}>Professors</p></strong></Card.Title>
          <img src={prof} width={200}></img>
          <Row className="alty" xs ={3}>
          <a href="/50best"><strong><p className="discover2">Top 50</p></strong></a>
          <a href="/50worst"><strong><p className="discover2">Low 50</p></strong></a>
          <a href="/professorranking"><strong><p className="discover2">Sorted</p></strong></a>
          </Row>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"20px", fontSize:"35px", color:"#1976d2"}}>Gym Data</p></strong></Card.Title>
          <img src={gym} width={200}></img>
          <a href="/gym"><strong><p className="discover2">See Gym Data</p></strong></a>
          </Card>
          <Card className="card-zt"><br></br>
          <Card.Title><strong><p style={{paddingTop:"20px", fontSize:"35px", color:"#1976d2"}}>Poll Data</p></strong></Card.Title>
          <img src={poll} width={200}></img>
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