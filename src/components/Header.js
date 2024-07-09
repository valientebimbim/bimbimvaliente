import { Navbar, Container, Nav, NavbarToggle } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '../pages/web.css';
import '../pages/mobile.css';
function Header() {
    return(
        <div id="header">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary border-bottom-primary">
                <Container>
                    <Navbar.Brand href="#home" className="order-1 order-lg-2 hide-1">
                        <a href="https://web.facebook.com/bin.bim.1276" className="mx-1 mx-lg-2" rel="norefferer"><i class="bi bi-facebook vw-1"></i></a>
                        <a href="https://www.instagram.com/bimbimvaliente/" className="mx-1 mx-lg-2" rel="norefferer"><i class="bi bi-instagram text-primary-gradient vw-1"></i></a>
                        <a href="https://github.com/valientebimbim/" className="mx-1 ms-lg-2" rel="norefferer"><i class="bi bi-github text-dark vw-1"></i></a>
                    </Navbar.Brand>
                    <Navbar.Brand href="#home" className="order-1 order-lg-2 hide-2">
                        Bimbim Valiente
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" className="border-0 toggler order-2 order-lg-1" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="order-2 order-lg-1">
                        <Nav className="me-lg-auto">
                            <Nav.Link as={NavLink} to="/" className="m-auto" activeclassname='active'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="m-auto" activeclassname='active'>About</Nav.Link>
                            <Nav.Link as={NavLink} to="/project" className="m-auto" activeclassname='active'>Project</Nav.Link>
                            <Nav.Link as={NavLink} to="/experience" className="m-auto" activeclassname='active'>Experience</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="m-auto" activeclassname='active'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;