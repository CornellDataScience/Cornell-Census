import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/master.css';
import '../static/styles/Department.css';
import Navbar from '../components/Navbar';
import Donut from '../components/Charts/Donut';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Department = () => {

    const [abbrev="AAS", setAbbrev] = useState();
    const [optionItems, setOptionItems] = useState();
    const [cardItems, setCardItems] = useState();
    const [departmentName="Asian American Studies", setInfo] = useState();

    useEffect(() => {
      fetch('/all_subjects').then(res => res.json()).then(data => {
        const AS = data.all_subjects
        setOptionItems(AS.map((subject) => <option key={subject}>{subject}</option>));
      });
    }, []);

    const handleChange = (e) => {
      setInfo(e.target.value)
      const params = {c:e.target.value}
      fetch(`/get_abbrev?c=${encodeURIComponent(params.c)}`).then(res => res.json()).then(data => {
          setAbbrev(data.abb);
          const params2 = {cA:data.abb}
          fetch(`/get_median_info?cA=${encodeURIComponent(params2.cA)}`).then(res => res.json()).then(data => {
            const med_info = data.allInfo;
            setCardItems(med_info.map((info) => <Card className="card-z">{info[0]}</Card>));
        })
      })
    }

    return (

        <div>
          <Navbar />
          <div className="grad">
            <div className="upper">
              <h1>{departmentName}</h1>
              <h1>{abbrev}</h1>
              <div><select onChange={e => handleChange(e)} className='react-select-div'>{optionItems}</select></div>
            </div>
            <br></br>
            
            <div>
              <Row className="card-gr" xs={2} md={3}>
                  {cardItems}
              </Row>
           
            </div>
          </div>
        </div>

      )
    }


  export default Department;