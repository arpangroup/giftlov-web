import  { useState, useContext, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";
import { authenticate } from "../../api/api";
// import AuthContext from "../../context/AuthProvider";
import useAuth from "../../hooks/useAuth";


const Login = () => {
  //const {setAuth} = useContext(AuthContext)
  const {setAuth} = useAuth();
  const [posts, getPosts] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert('');
    setLoading(true);
    //console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "coding_challenge_1" || inputPassword !== "coding_challenge_1") {
      setAlert('Incorrect username or password.');
      setLoading(false);
      return;
    }
    // const response = await authenticate(inputUsername, inputPassword)
    // console.log("RESPONSE: ", response);
    // const accessToken = response?.token;
    // const roles = response?.privileges;
    // const fullName = response?.fullName;
    // setAuth({username: fullName, accessToken, roles});
    setAuth({username: "jofnDOe", accessToken: "ggg", roles:["placeOrder", "items", "orderStatus", "queryOrders"]});

    // clear input fields
    setInputUsername('');
    setInputPassword('');
    setLoading(false);
    navigate(from, {replace: true});
  };

  const handleForgotPassword = () => {};


  return (
    <div className="sign-in__wrapper" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="sign-in__backdrop"></div>
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          <img className="img-thumbnail mx-auto d-block mb-2" src={Logo} alt="logo"/>
          <div className="h4 mb-2 text-center">Sign In</div>
          {alert && <Alert className="mb-2" variant="danger" onClose={() => setAlert('')} dismissible>{alert}</Alert>}
          <Form.Group className="mb-2" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={inputUsername}
              placeholder="Username"
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputPassword}
              placeholder="Password"
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          {!loading ? (
            <Button className="w-100" variant="primary" type="submit">Log In</Button>
          ) : (
            <Button className="w-100" variant="primary" type="submit" disabled>Logging In...</Button>
          )}
          <div className="d-grid justify-content-end">
            <Button className="text-muted px-0" variant="link" onClick={handleForgotPassword}>Forgot password?</Button>
          </div>
        </Form>
        <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
          Made by Giftlov C | &copy;2024
        </div>
    </div>
  );
};

export default Login;
