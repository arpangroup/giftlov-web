import { Container, NavDropdown, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Cart.css";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useAuth();
    const {cart} = useCart();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">Giftlov</Navbar.Brand>
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
                            <NavDropdown.Item onClick={() => navigate('/checkout', {state: {from: location}, replace: true})}>Checkout Cart</NavDropdown.Item>
                            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                     </Navbar.Collapse>

                    {cart?.cartItems?.length > 0 &&
                     <div className="justify-content-end">
                        <div className="cart">
                            <span className="count">{cart?.cartItems?.length}</span>
                            <i className="material-icons">shopping_cart</i>
                        </div>
                     </div>
                    }




                </Container>
            </Navbar>
        </>
    )
}
export default Header;