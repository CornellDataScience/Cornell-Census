import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/master.css';
import '../static/styles/Department.css';
import Navbar from '../components/Navbar';
import Donut from '../components/Department/Donut';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Department = () => {

    const [abbrev="AAS", setAbbrev] = useState();
    const [optionItems, setOptionItems] = useState();
    const [cardItems, setCardItems] = useState();
    const [departmentName="Asian American Studies", setInfo] = useState();
    var checked= new Array(100).fill(false);
    var allClass = new Array(100);
    const [donut, setDonut] = useState();

 
    useEffect(() => {
      fetch('/all_subjects').then(res => res.json()).then(data => {
        const AS = data.all_subjects
        setOptionItems(AS.map((subject) => <option key={subject}>{subject}</option>));
      });
    }, []);

    const handleCheck = (pos) => {
      for( let i =0; i < checked.length; i++){
        if (i == pos)  checked[i] = !checked[i]
      }
      setDonut(<Donut checks={checked} classes={allClass}></Donut>)
      
    };

    const handleChange = (e) => {
      checked= new Array(100).fill(false);
      allClass = new Array(100);
      setInfo(e.target.value)
      const params = {c:e.target.value}
      fetch(`/get_abbrev?c=${encodeURIComponent(params.c)}`).then(res => res.json()).then(data => {
          setAbbrev(data.abb);
          const params2 = {cA:data.abb}
          fetch(`/get_median_info?cA=${encodeURIComponent(params2.cA)}`).then(res => res.json()).then(data => {
            const med_info = data.allInfo;
            allClass = data.allInfo;
            setCardItems(med_info.map((info, index) => 
              <Card className="card-zt">
                <Card.Title style={{paddingTop:"20px"}}><b>{info[0]}</b></Card.Title>
                <Card.Subtitle>Teacher: {info[1]}</Card.Subtitle>
                <Card.Subtitle>Median Grade: <b>{info[2]}</b> ({info[3]})</Card.Subtitle>
                <Card.Body><input className="ct" id={index} name={info[0]} value={info[2]} 
                            type="checkbox" onChange={() => handleCheck(index)}/></Card.Body>
              </Card>
            ));
            var inputs = document.getElementsByTagName('input');
            for (var i=0; i<inputs.length; i++)  {
              if (inputs[i].type == 'checkbox')   {
                inputs[i].checked = false;
              }
            }
            setDonut();
        })
      })
    }

    return (

        <div>
          <Navbar />
          <div className="grad">
            <div className="upper">
            <strong><p style={{fontSize:"60px"}}>{departmentName}</p></strong>
            <strong><p style={{}}>{abbrev}</p></strong>
              <div><select onChange={e => handleChange(e)} className='react-select-div'>{optionItems}</select></div>
            </div>
            <br></br>
            <div>
              {donut}

              <div className="upper"><strong><p style={{}}>All Classes:</p></strong></div>
              <Row className="card-gr" xs={3} md={4}>
                  {cardItems}
              </Row>

            <div style={{height: "100px"}}>

            </div>
            </div>
          </div>
        </div>

      )
    }


  export default Department;