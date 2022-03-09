import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/main.css';
import '../static/styles/Home.css';
import '../static/styles/master.css';
import Navbar from '../components/Navbar';
import Donut from '../components/Charts/Donut';
import React, { useState, useEffect } from 'react';


const Department = () => {

    const department_name = "Computer Science";
    const department_desc = "test test test test.";
    const [allSubjects, setAllSubjects] = useState(0);

    useEffect(() => {
      fetch('/all_subjects').then(res => res.json()).then(data => {
        setAllSubjects(data.all_subjects);
      });
    }, []);

    return (

        <div className="departmentPage" style={{backgroundColor:"#311B92"}}>
            <body style={{backgroundColor:"#311B92"}}>
            <Navbar />
            <div className="dept-title">
            <h1 className="dtitle">{department_name}</h1>
            <p>{department_desc}</p>
            <Donut />
            </div>
            <p>List of all subjects: {allSubjects}.</p>
            </body>
        </div>

      )
    }


  export default Department;