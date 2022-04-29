import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/styles/Department.css';
import '../../static/styles/master.css';
import Navbar from '../../components/Navbar';
import SelectSearch from 'react-select-search';
import Donut from '../Charts/Donut';
import React, { useState, useEffect } from 'react';


const BestProfessors = () => {

    const selectValue = ""
    const [optionItems, setOptionItems] = useState();
    const [professorName="Select A Professor", setInfo] = useState();

    const [defRating="5.0", setRating] = useState();
    const [defReview="They are okay.", setReview] = useState();
    

    useEffect(() => {
      fetch('/get50best').then(res => res.json()).then(data => {
        const AS=data.get50best
        setOptionItems(AS.sort().reverse().map((professor, count) => <option key={professor}>{count+1}. {professor[1]} ({professor[0]})</option>));
      });

    }, []);

    const handleChange = (e) => {
      setInfo(e.target.value)
      const params = {c:e.target.value}
      fetch(`/pull_rating?c=${encodeURIComponent(params.c)}`).then(res => res.json()).then(data => {
          setRating(data.rating); setReview(data.review);
      })
    }

    

    return (

        <div>
          <Navbar />
          <div className="grad">
              <div className="CenterTitle">
                <strong><p className="centerText">50 Best Rated Professors</p></strong>
              </div>
           
            <div className="professors">
                <p>{optionItems}</p>
        	</div>
             
        
           
            
           
            </div>
        </div>
      )
    }


  export default BestProfessors;