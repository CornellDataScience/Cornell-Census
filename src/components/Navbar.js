import graphic1 from '../static/img/census_logo_new.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../static/styles/master.css';

const Nvbar = () => {
  return (
    <Navbar bg="orange" sticky="top" style={{backgroundColor:"#1976D2"}}>
      <Container>
      <Navbar.Brand style={{color:"white"}} href="/">
        <div style={{paddingTop: "10px"}}>
        <img src={graphic1} width="30" height="30" className="d-inline-block" alt="logo"/>
        <div style={{display: "inline-block", paddingLeft: "10px"}}>
        <div style={{display: "inline-block"}}>
                  <h1 className="navttext2">Cornell</h1>
                </div>
                <div style={{display: "inline-block"}}>
                  <h1 className="navttext">Census</h1>
                </div>
        </div>
        </div>
      </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:"white"}} href="/Team">Team</Nav.Link>
            <Nav.Link style={{color:"white"}} href="/mission">Mission</Nav.Link>
            <Nav.Link style={{color:"#1976D2", backgroundColor:"white", borderRadius:"15px", paddingTop:"-15px", marginLeft:"5px"}} href="/explore"><strong>Explore</strong></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nvbar;