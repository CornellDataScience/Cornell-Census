import graphic1 from '../static/img/census_logo.PNG';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Nvbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">
        <img src={graphic1} width="30" height="30" className="d-inline-block" alt="logo"/>
        CornellCensus
      </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="justify-content-end">
          <Nav className="auto-ml">
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Mission</Nav.Link>
            <Nav.Link href="#link">Data</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nvbar;