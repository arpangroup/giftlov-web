import { Container, NavDropdown, Navbar } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { auth } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Giftlov</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{auth.username}</a>
                        </Navbar.Text> */}
                        <NavDropdown title={auth.username} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                        </NavDropdown>
                     </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;