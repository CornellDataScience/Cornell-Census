// import React, { useState, useEffect } from 'react';
import '../static/styles/Home.css';
import '../static/styles/master.css';
import '../static/styles/Comp1.css';
import logo from '../static/img/census_logo_new.png';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Comp1 from '../components/Home/Comp1.js';
import Comp2 from '../components/Home/Comp2.js';
import Comp3 from '../components/Home/Comp3.js';


function Home() {
  // const [placeholder, setPlaceholder] = useState('Hi');

  // useEffect(() => {
  //   fetch('/hello').then(res => res.json()).then(data => {
  //     setPlaceholder(data.result);
  //   });
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="grad">
        <div className="div1">
            <div className="linecolors">
              <div className="orange">
              </div>
              <div className="blue">
              </div>
              <div className="red">
              </div>
              <div className="green">
              </div>
            </div>
            <div className="logo-div">
                <img src={logo} width="400px" height="400px" alt="img0" style={{zIndex: "9"}}/>
            </div>
            <div className="intro-text">
                <div style={{display: "inline-block"}}>
                  <h1 className="ttext2">Cornell</h1>
                </div>
                <div style={{display: "inline-block"}}>
                  <h1 className="ttext">Census</h1>
                </div>
                <br></br>
                <p className="bodyTextA">Information all available in one place and open to the public. Transparency in the community at Cornell. </p>
                <a href="/explore"><strong><p className="discover">Discover Cornell</p></strong></a>
            </div>
            
        </div>
        <Comp1 />
        <Comp2 />
        <Comp3 />

        <Footer/>
        <br></br>
      </div>
    </div>
  );
}

export default Home;
