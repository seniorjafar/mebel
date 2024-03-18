import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import shop from '../../images/shop.png';
import people from '../../images/people.png';
import search from '../../images/search.png';
import heart from '../../images/heart.png';
import Shop from '../pages/shop/shop';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5 m-auto gap-5">
              <Nav.Link className="ms-5" href="#features">
                Home
              </Nav.Link>
              <Nav.Link to='../pages/shop/shop' href="../pages/shop/shop">
                Shop
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="d-flex gap-3">
              <Nav.Link href="#deets">
                <img src={people} alt="" />
              </Nav.Link>
              <Nav.Link href="#memes">
                <img src={search} alt="" />
              </Nav.Link>
              <Nav.Link href="#heart">
                <img src={heart} alt="" />
              </Nav.Link>
              <Nav.Link href="#shop">
                <img src={shop} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;