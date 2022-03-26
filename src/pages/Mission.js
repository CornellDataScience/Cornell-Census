import '../static/styles/master.css';
import '../static/styles/Mission.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import logo from '../static/img/census_logo_new.png';


function Mission() {

  return (
    <div>
      <Nvbar />
      <div className="grad">
        <div className="top-div">
            <div className="left-text">
            <strong><p className="landing">Reinventing the way you see Cornell University.</p></strong>
            </div>
        </div>
        <div className="about">
            <div className="about-content">
            <strong><p className="landing-2">About CornellCensus</p></strong>
            <div className="p-text">
            <strong><p className="landing-3">At CornellCensus we believe in providing the most relevant and practical information to Cornell students free of charge and with extreme transparency.</p></strong>
            </div>
            </div>
            <div className="stats">
                <div className="box1">
                    <strong><p style={{fontSize: "40px"}}>300</p></strong>
                    <strong><p style={{marginTop: "-25px"}}>Professors</p></strong>
                </div>

                <div className="box1">
                    <strong><p style={{fontSize: "40px"}}>800</p></strong>
                    <strong><p style={{marginTop: "-25px"}}>Courses</p></strong>
                </div>
              
           
            
            </div>
            <br></br>
            <Footer/>
        </div>
        

        
      

     
      
      </div>
    </div>
  );
}

export default Mission;