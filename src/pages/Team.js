import '../static/styles/master.css';
import '../static/styles/Team.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import CardGroup from 'react-bootstrap/CardGroup';
import FaceCard from '../components/Team/FaceCard';
import arjun from '../static/img/ArjunShah.jpeg';
import elliot from '../static/img/ElliotvanHuijgevoort.jpeg';


function Team() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <strong><p className="teamP">Team</p></strong>
      
      <CardGroup style={{justifyContent: "center"}}>
        <FaceCard name={"David Han"} image={arjun}></FaceCard>  
        <FaceCard name={"Elliot van Huijgevoort"} image={elliot}></FaceCard>     
        <FaceCard name={"Arjun Shah"} image={arjun}></FaceCard>    
      </CardGroup>

      <div className="cds">
          In collaboration with Cornell Data Science.
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default Team;