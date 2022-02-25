// import React, { useState, useEffect } from 'react';
import '../static/styles/Home.css';
import logo from '../static/img/census_logo.PNG';
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
    <div>
      <Nvbar />
      <div id="grad">
        <div className="div1">
            <div className="logo-div">
                <img src={logo} width="200px" height="200px" alt="img0"/>
            </div>
            <div className="intro-text">
                <h1>CornellCensus</h1>
                <br></br>
                <p>Information all available in one place and open to the public. Transparency in the community at Cornell. </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
