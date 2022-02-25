import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/main.css';
import '../static/styles/Home.css';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';

const Department = () => {
    const department_name = "Computer Science";
    const department_desc = "test test test test.";


    return (
        <div className="departmentPage">
            <Navbar />
            <div id="grad">
            <div className="dept-title">
            <h1 className="dtitle">{department_name}</h1>
            <p>{department_desc}</p>
            </div>
            <Graph />
            </div>
        </div>
      )
    }


  export default Department;