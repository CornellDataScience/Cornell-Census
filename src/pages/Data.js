import '../static/styles/Data.css';
import Nvbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import CardComponent from '../components/Data/CardComponent';

function Data() {

  return (
    <div>
      <Nvbar />
      <div id="grad">
        <div className='row'>
          <div class="column"><CardComponent title="Courses" text="With over 4000 courses, it can be difficult to choose 
          courses. "/></div>
          <div class="column"><CardComponent title="Professors" /></div>
          <div class="column"><CardComponent title="Other" /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Data;
