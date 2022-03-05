import '../static/styles/master.css';
import '../static/styles/Team.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import CardGroup from 'react-bootstrap/CardGroup';
import FaceCard from '../components/Team/FaceCard';
import arjun from '../static/img/ArjunShah.jpeg';

function Team() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <strong><p className="teamP">Team</p></strong>
      
      <CardGroup style={{justifyContent: "center"}}>
        <FaceCard name={"David"} image={arjun}>
            </FaceCard> 
        <FaceCard name={"David"}></FaceCard>  
        <FaceCard name={"David"}></FaceCard>     
        <FaceCard name={"David"}></FaceCard>    
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