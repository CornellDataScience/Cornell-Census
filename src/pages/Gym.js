import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/Department.css';
import '../static/styles/master.css';
import Navbar from '../components/Navbar';
import SelectSearch from 'react-select-search';
import Donut from '../components/Charts/Donut';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer.js';


const Gym = () => {

    const selectValue = ""
    const [optionItems, setOptionItems] = useState();
    const [professorName="Select A Professor", setInfo] = useState();

    const [defRating="5.0", setRating] = useState();
    const [defReview="They are okay.", setReview] = useState();
    

    useEffect(() => {
      fetch('/gymdata').then(res => res.json()).then(data => {
        const AS=data.gymdata
        console.log(AS);
        setOptionItems(AS.map((gym) => <option key={gym}>{gym[1]}</option>));
      });

    }, []);

    const handleChange = (e) => {
      setInfo(e.target.value)
      const params = {c:e.target.value}
      fetch(`https://census-backend.herokuapp.com/pull_rating?c=${encodeURIComponent(params.c)}`).then(res => res.json()).then(data => {
          setRating(data.rating); setReview(data.review);
      })
    }

    

    return (

        <div>
          <Navbar />
          <div className="grad">
            <div className="upper">
             <h1>{professorName}</h1>
             <select onChange={e => handleChange(e)} className='react-select-div' placeholder="Choose A Professor">{optionItems}</select>
          </div>
           <div className="right-upper">
           <h1>{defRating}</h1>
            </div>
            <div className="reviews">
              <h1 className="review-title">Reviews</h1>
              <p>{defReview}</p>
            </div>
            <div className="cds">
          In collaboration with Cornell Data Science.
          <Footer />
          <br></br>
      </div>
            </div>
        </div>
      )
    }


  export default Gym;