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
<<<<<<< HEAD
          <div className="contents-left">
            <strong><p className="div-title">Courses</p></strong>
            <p>CS 3410</p>
            <p>CS 3110</p>
            <p>CS 2112</p>
          </div>
          <div className="contents-right">
            <strong><p>See All Courses</p></strong>
          </div>
=======
            <div className="contents-left">
                <strong><p className="div-title">Courses</p></strong>
                <p>CS 3410</p>
                <p>CS 3110</p>
                <p>CS 2112</p>
            </div>
            <div className="contents-right">
            <a href="/department"><strong><p>See All Courses</p></strong></a>
            </div>
>>>>>>> 5a1aa603ec5fb60f3d59ca36a09585e5d165ff19
        </div>
        <br></br>

        <div className="cont1">
<<<<<<< HEAD
          <div className="contents-left">
            <strong><p className="div-title">Professors</p></strong>
            <p>Jim Belk</p>
            <p>David Gries</p>
            <p>David Han</p>
          </div>
          <div className="contents-right">
            <strong><p>See All Professors</p></strong>
          </div>
=======
            <div className="contents-left">
                <strong><p className="div-title">Professors</p></strong>
                <a href="/50best"><p>View 50 Highest Rated Cornell Professors</p></a>
                <a href="/50worst"><p>View 50 Worst Rated Cornell Professors</p></a>
                <p>David Han</p>
            </div>
            <div className="contents-right">
            <a href="/professorranking"><strong><p>Sort By Rating</p></strong></a> 
            <a href="/professors"><strong><p>See All Professors</p></strong></a>
            </div>
>>>>>>> 5a1aa603ec5fb60f3d59ca36a09585e5d165ff19
        </div>

        <br></br>

        <div className="cont1">
          <div className="contents-left">
            <strong><p className="div-title">Gym Occupancies</p></strong>
            <p>Gym 1</p>
            <p>Gym 2</p>
            <p>Gym 3</p>
          </div>
          <div className="contents-right">
            <a href="/gym"><strong><p>See All Gyms</p></strong></a>
          </div>
        </div>

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

export default Explore;