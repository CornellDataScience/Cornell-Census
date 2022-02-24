// import React, { useState, useEffect } from 'react';
import '../static/styles/Home.css';
import graphic1 from '../static/img/landing-graph1.PNG';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function Home() {
  // const [placeholder, setPlaceholder] = useState('Hi');

  // useEffect(() => {
  //   fetch('/hello').then(res => res.json()).then(data => {
  //     setPlaceholder(data.result);
  //   });
  // }, []);

  return (
    <div className='App'>
      <Nvbar />
      <div id="grad">
        <div className="div1">
            <div className="logo-div">
                <img src={graphic1} width="200px" height="200px" alt="img0"/>
            </div>
            <div className="intro-text">
                <h1>CornellCensus</h1>
                <p>Information all available in one place and open to the public. Transparency in the community at Cornell. Information all available in one place and open to the public. Transparency in the community at Cornell</p>
            </div>
        </div>


        <div className="div2">
            <div className="intro-text">
                <p>Information all available in one place and open to the public. Transparency in the community at Cornell</p>
            </div>
            <div className="logo-div">
                <img src={graphic1} width="450px" height="250px" alt="img1"/>
            </div>
        </div>

        <div className="div2">
          <div className="logo-div">
            <img src={graphic1} width="450px" height="250px" alt="img2"/>
          </div>
          <div className="intro-text">
              <p>Access verified information for over 500 courses and 300 professors at Cornell University. </p>
          </div>
        </div>

        <div className="div3">
          <div className="logo-div">
              <img src={graphic1} width="200px" height="200px" alt="img3"/>
          </div>
          <div className="intro-text">
              <p>Resources at hand to help make the best decisions for you. And don't forget Resources at hand to help make the best decisions for you.</p>
          </div>
          <div className="logo-div">
            <img src={graphic1} width="200px" height="200px" alt="img4"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
