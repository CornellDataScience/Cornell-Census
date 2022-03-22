import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/Department.css';
import '../static/styles/master.css';
import Navbar from '../components/Navbar';
import Donut from '../components/Charts/Donut';
import React, { useState, useEffect } from 'react';


const Department = () => {

    const selectValue = ""
    const [optionItems, setOptionItems] = useState();
    const [departmentName="Architecture", setInfo] = useState();

    useEffect(() => {
      fetch('/all_subjects').then(res => res.json()).then(data => {
        const AS = data.all_subjects
        setOptionItems(AS.map((subject) => <option key={subject}>{subject}</option>));
      });
    }, []);

    const handleChange = (e) => {
      setInfo(e.target.value)
    }

    return (

        <div>
          <Navbar />
          <div className="grad">
            <h1>{departmentName}</h1>
            <div><select value={selectValue} onChange={e => handleChange(e)} >{optionItems}</select></div>
          </div>
        </div>

      )
    }


  export default Department;