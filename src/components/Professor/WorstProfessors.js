import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/styles/Department.css';
import '../../static/styles/master.css';
import Navbar from '../../components/Navbar';
import SelectSearch from 'react-select-search';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer.js';


const WorstProfessors = () => {

    const selectValue = ""
    const [optionItems, setOptionItems] = useState();
    const [professorName="Select A Professor", setInfo] = useState();

    const [defRating="5.0", setRating] = useState();
    const [defReview="They are okay.", setReview] = useState();
    

    useEffect(() => {
      fetch('https://census-backend.herokuapp.com/get50worst').then(res => res.json()).then(data => { //style={ count === 1 || count === 2 || count === 0 ? { fontSize : "60px" } : null}
        const AS=data.get50worst
        setOptionItems(AS.sort().map((professor, count) => <option style={ count === 1 || count === 2 || count === 0 ? { fontSize : "50px", paddingBottom : "10px" } : {fontSize : "30px", paddingBottom : "5px"}} key={professor}>{count+1}. {professor[1]} ({professor[0]})</option>));
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
              <div className="CenterTitle">
                <strong><p className="centerText">50 Worst Rated Professors</p></strong>
              </div>
           
            <div className="professors">
                <p>{optionItems}</p>
        	</div>
          <div className="cds2">
          <Footer />
          <br></br>
      </div>
            </div>
            
        </div>
      )
    }


  export default WorstProfessors;