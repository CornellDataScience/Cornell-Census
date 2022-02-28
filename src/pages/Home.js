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
            <div className="logo-div">
                <img src={logo} width="400px" height="400px" alt="img0"/>
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
                <strong><p className="discover">Discover Cornell</p></strong>
            </div>
        </div>
        <Comp1 />
        <Comp2 />
        <Comp3 />

        <h1>test</h1>
      </div>
    </div>
  );
}

export default Home;
