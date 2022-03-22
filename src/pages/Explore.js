import '../static/styles/master.css';
import '../static/styles/Explore.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


function Explore() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <strong><p className="teamP">Explore Cornell Census</p></strong>
        <div className="cont1">
            <div className="contents-left">
                <strong><p className="div-title">Courses</p></strong>
                <p>CS 3410</p>
                <p>CS 3110</p>
                <p>CS 2112</p>
            </div>
            <div className="contents-right">
            <strong><p>See All Courses</p></strong>
            </div>
        </div>
        <br></br>

        <div className="cont1">
            <div className="contents-left">
                <strong><p className="div-title">Professors</p></strong>
                <p>Jim Belk</p>
                <p>David Gries</p>
                <p>David Han</p>
            </div>
            <div className="contents-right">
            <strong><p>See All Professors</p></strong>
            </div>
        </div>
      

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