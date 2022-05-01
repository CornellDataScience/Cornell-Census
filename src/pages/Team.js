import '../static/styles/master.css';
import '../static/styles/Team.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import CardGroup from 'react-bootstrap/CardGroup';
import FaceCard from '../components/Team/FaceCard';
import elliot from '../static/img/ElliotvanHuijgevoort.jpeg';


function Team() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <strong><p className="teamP">Team</p></strong>
      
      <CardGroup style={{justifyContent: "center"}}>
        <FaceCard name={"David Han"} text={"/team"}gith={"https://github.com/dhan0779"} linked={"https://www.linkedin.com/in/david-han-b21689234/"} year={"2025"} image={"https://media-exp1.licdn.com/dms/image/C5603AQEnGFQxOWGR_A/profile-displayphoto-shrink_400_400/0/1648251232370?e=2147483647&v=beta&t=rVMZlNW_QlVD5GjJuNBwwZFFYp9M5edXxRIdGEaf1Xg"} hometown="Vienna, VA"></FaceCard>  
        <FaceCard name={"Mason Bulling"} text={"https://mbulling.github.io/self"} gith={"https://github.com/mbulling"} linked={"https://www.linkedin.com/in/mason-bulling-167164228/"} year={"2025"} image={"https://media-exp1.licdn.com/dms/image/C4E03AQHuYz6chRg6Yg/profile-displayphoto-shrink_400_400/0/1649014949052?e=1656547200&v=beta&t=Xs6yBHFxhTS5VMdgQrhtw5D1EhHz09KbPKmurEdhKO8"} hometown="Rochester, NY"></FaceCard>     
        <FaceCard name={"Elliot van Huijgevoort"} text={"/team"} gith={"https://github.com/ElliotVH"} linked={"https://www.linkedin.com/in/elliot-van-huijgevoort"} year={"2024"} image={elliot} hometown="Ithaca, NY"></FaceCard>    
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