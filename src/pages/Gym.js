import '../static/styles/master.css';
import '../static/styles/Gym.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


function Gym() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <div className="cont1">
          <div className="contents-left">
            <strong><p className="div-title">Gyms</p></strong>
            <p>Gym 1</p>
            <p>Gym 2</p>
            <p>Gym 3</p>
          </div>
          <div className="contents-right">
            <strong><p>See All Gyms</p></strong>
          </div>
        </div>
        <br></br>

        <br></br>
        <div className="cds">
          In collaboration with Cornell Data Science.
          <Footer />
          <br></br>
        </div>

      </div>
    </div>
  );
}

export default Gym;