import '../static/styles/master.css';
import '../static/styles/Gym.css';
import React, { useState, useEffect } from 'react';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Line from '../components/Gym/Line';


function Gym() {

  const [gymData, setGymData] = useState();
  const [line, setLine] = useState();

 
  useEffect(() => {
    fetch('/pull_gyms').then(res => res.json()).then(data => {
      setGymData(data.gym_list);
      setLine(<Line gym_data={data.gym_list}></Line>)
    });
  }, []);

  return (
    <div>
      <Nvbar />
      <div className="grad">
        {line}
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