import Container from 'react-bootstrap/Container';
import logo from './navlogo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <div> 
        
      { [false].map((expand) => (
        <Navbar key={expand} collapse="sm" bg="black" expand={expand} className="mb-3 ">
            
          <Container  fluid>
            <Navbar.Brand  href="/"><img className="logo" src={logo}  alt=""/></Navbar.Brand>
            <Navbar.Toggle  aria-controls={` offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  className='ocheader'  closeButton>
              <a href="/"><img  className="logo" src={logo} alt=""/></a>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
                </Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
              <p>Rethinking the blockchain:</p>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href="/getstarted">GET STARTED</Nav.Link>
                  <Nav.Link href="/news">NEWS</Nav.Link>
                  <Nav.Link href="/wartwallet">wallet</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

   </div>
  );
}

export default OffcanvasExample;