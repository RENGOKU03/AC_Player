import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const navstyle = {
  margin: '10px 50px 10px 20px'
};

// top right bottom left
const searchStyle = {
  margin: '10px 100px 10px 10px'
}
function HomePageNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={navstyle}><b>ACPLAY</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Trending</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Music</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Gaming</NavDropdown.Item>
              <NavDropdown.Item href="#action4">News</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Technology</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action3">Trending</NavDropdown.Item> */}
              
            </NavDropdown>
            <Nav.Link href="">
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex" style={searchStyle}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomePageNavbar;