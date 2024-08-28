import Container from 'react-bootstrap/Container';
import logo from './navlogo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
              <Offcanvas.Body className='backgroundimage'>
              <p>Rethinking the blockchain:</p>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href="/getstarted"><h3  className="logohome2 logo1left">GET STARTED</h3></Nav.Link>
                  <Nav.Link href="/news"><h3  className="logohome2 logo1left">NEWS</h3></Nav.Link>
                  <Nav.Link href="/algorithim"><h3  className="logohome2 logo1left">ALGORITHIM</h3></Nav.Link>
                  <Nav.Link href="/whitepaper"><h3  className="logohome2 logo1left">WHITEPAPER</h3></Nav.Link>
                  <Nav.Link href="/faq"><h3  className="logohome2 logo1left">FAQs</h3></Nav.Link>
                  <Nav.Link href="https://wartscan.io/"><h3  className="logohome2 logo1left">EXPLORER</h3></Nav.Link>
                  <Nav.Link href="https://www.warthog.network/docs/"><h3  className="logohome2 logo1left">DOCS</h3></Nav.Link>
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