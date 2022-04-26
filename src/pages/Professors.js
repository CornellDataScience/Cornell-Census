import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/Department.css';
import '../static/styles/master.css';
import Navbar from '../components/Navbar';
import Donut from '../components/Charts/Donut';
import React, { useState, useEffect } from 'react';


const Professors = () => {

    const selectValue = ""
    const [optionItems, setOptionItems] = useState();
    const [professorName="Select A Professor", setInfo] = useState();

    const [defRating="5.0", setRating] = useState();
    

    useEffect(() => {
      fetch('/all_professors').then(res => res.json()).then(data => {
        const AS=data.all_professors
        setOptionItems(AS.map((professor) => <option key={professor}>{professor[0]}</option>));
      });

    }, []);

    const handleChange = (e) => {
      setInfo(e.target.value)
      const params = {c:e.target.value}
      fetch(`/pull_rating?c=${encodeURIComponent(params.c)}`).then(res => res.json()).then(data => {
          setRating(data.rating);
      })
    }

    

    return (

        <div>
          <Navbar />
          <div className="grad">
            <div className="upper">
             <h1>{professorName}</h1>
             <select onChange={e => handleChange(e)} className='react-select-div'>{optionItems}</select>
          </div>
           <div className="right-upper">
           <h1>{defRating}</h1>
            </div>
           
            </div>
        </div>
      )
    }


  export default Professors;