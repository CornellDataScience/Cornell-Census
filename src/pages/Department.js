import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/main.css';
import '../static/styles/Home.css';
import '../static/styles/master.css';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';

const Department = () => {
    const department_name = "Computer Science";
    const department_desc = "test test test test.";


    return (
        <div className="departmentPage" style={{backgroundColor:"#311B92"}}>
            <body style={{backgroundColor:"#311B92"}}>
            <Navbar />
            <div className="dept-title">
            <h1 className="dtitle">{department_name}</h1>
            <p>{department_desc}</p>
            </div>
            </body>
        </div>
      )
    }


  export default Department;