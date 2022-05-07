import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/styles/Department.css';
import '../../static/styles/master.css';
import Navbar from '../../components/Navbar';
import SelectSearch from 'react-select-search';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer.js';


const ProfessorRanking = () => {

    const selectValue = ""
    const [optionItems, setOptionItems] = useState();
    const [professorName="Select A Professor", setInfo] = useState();

    const [defRating="5.0", setRating] = useState();
    const [defReview="They are okay.", setReview] = useState();
    

    useEffect(() => {
      fetch('/all_professors2').then(res => res.json()).then(data => {
        const AS=data.all_professors2
        setOptionItems(AS.sort().reverse().map((professor) => <option key={professor}>{professor[1]} ({professor[0]})</option>));
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
            <div className="upper">
            <div className="CenterTitle">
                <strong><p className="centerText">Cornell Professors By Rating</p></strong>
              </div>
            <div>
                <p>{optionItems}</p>
        	</div>
             
          </div>
           
            
          <div className="cds2">
        
          <Footer />
          <br></br>
      </div>
            </div>
            
        </div>
      )
    }


  export default ProfessorRanking;