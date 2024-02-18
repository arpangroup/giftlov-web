import { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";
import { placeOrder } from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";

const uniqueId = uuidv4();
const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {cart, cartItems, resetCart} = useCart();    
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');
    const [orderRequest, setOrderRequest] = useState({//TODO: remove default values in prod
        customerName: 'Arpan Jana',
        firstName: 'Arpan',
        lastName: 'Jana',
        referenceNo: uniqueId,
        deliveryChannel: 'API',
        contactNumber: '8016626642',
        smsMobileNumber: '8016626642',
        emailAddress: 'arpangroup1@gmail.com',
        additionalParameters: {},
        countryCode: '+91',
        languageCode: 'EN',
        lineItems: [],
        orderNote: 'Dummy Order',
        address: '', 
        address2: '',
    });

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        console.log(fieldName, fieldValue);
        setOrderRequest(prev => {
            return {...prev, [fieldName]: fieldValue}
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setAlert('');
        setLoading(true);   
        orderRequest.lineItems = cartItems.map(it => ({cardItemId: it.id,value: it.toValue}));
        orderRequest.additionalParameters = {
            address: orderRequest.address,
            address2: orderRequest.address2, 
            orderNote: orderRequest.orderNote
        }
               
        console.log("ORDER_REQUEST: ", orderRequest);
        const orderResponse = await placeOrder(orderRequest);
        console.log("ORDER_RESPONSE: ", orderResponse);
        resetCart();
        navigate('/invoice', {state: {from: location}, replace: true})
    }



    return (
        <>
        {cartItems.length == 0 && 
            <h1>Cart is empty!!</h1>
        }

        {cartItems.length > 0 &&
            <Container style={{padding: '16px'}}>
                <div className="py-5 text-center">
                    <h2>Checkout form</h2>
                    <p className="lead">An endpoint used to place gift cards orders, this endpoint returns a reference for the generated order so tha the user can query the generated order status with another API. Reference no is unique, trying to place multiple orders with the same reference no will return an error.</p>
                </div>
                <Row>
                    <Col className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {cartItems.map(item => (
                                <CartItem key={item.id}
                                title={item.name} 
                                subtitle={item.giftCardInformation}
                                amount={item.toValue}/>
                                )
                            )}

                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-$0</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${cart.totalCartAmount}</strong>
                            </li>
                        </ul>
                        
                        <form className="card p-2">
                            <div className="input-group">
                            <Form.Control type="text" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                            </div>
                        </form>
                    </Col>
                    <Col className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" onSubmit={handleSubmit}>
                            <Row>
                                <Col className="col-md-7 mb-3">
                                    <label>Reference Number</label>
                                    <Form.Control type="text" placeholder="" name="referenceNo" value={uniqueId} disabled />
                                </Col>
                                <Col className="col-md-5 mb-3">
                                    <label>Delivery Channel</label>
                                    <Form.Select name="deliveryChannel" onChange={handleChange} required>
                                        <option hidden>Choose...</option>
                                        <option value={'API'} selected>Api</option>
                                        <option value={'EMAIL'}>Email</option>
                                        <option value={'SMS'}>Sms</option>
                                    </Form.Select>
                                    <div className="invalid-feedback">Please select a valid country.</div>
                                </Col>                        
                            </Row>
                            <div className="mb-3">
                                <label>Customer Name</label>
                                <Form.Control type="text" placeholder="Enter customer name" name="customerName" onChange={handleChange} value="Arpan Jana" required/>
                                <div className="invalid-feedback" style={{width: '100%'}}>Please enter a valid Customer name</div>
                            </div>
                            <Row>
                                <Col className="col-md-6 mb-3">
                                    <label>First name</label>
                                    <Form.Control type="text" placeholder=""  name="firstName" onChange={handleChange} value="Arpan" required/>
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                </Col>
                                <Col className="col-md-6 mb-3">
                                    <label>Last name</label>
                                    <Form.Control type="text" placeholder=""  name="lastName" onChange={handleChange} value="Jana" required/>
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-md-6 mb-3">
                                    <label>Contact Number<span className="text-muted">(Optional)</span></label>
                                    <Form.Control type="text" placeholder=""  name="contactNumber" onChange={handleChange} value="8016626642" required/>
                                    <div className="invalid-feedback">Valid contact number is required.</div>
                                </Col>
                                <Col className="col-md-6 mb-3">
                                    <label>SMS Mobile Number
                                    {orderRequest.deliveryChannel !== 'SMS' && <span className="text-muted">(Optional)</span>}
                                    </label>
                                    <Form.Control type="text" placeholder=""  name="smsMobileNumber" onChange={handleChange} value="8016626642" required/>
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </Col>
                            </Row>
                            

                            <div className="mb-3">
                                <label>Email 
                                    {orderRequest.deliveryChannel !== 'EMAIL' && <span className="text-muted">(Optional)</span>}
                                </label>
                                <Form.Control type="email" placeholder="you@example.com" value="arpangroup1@gmail.com"  required={orderRequest.deliveryChannel == 'EMAIL'} />
                                <div className="invalid-feedback" style={{width: '100%'}}>Please enter a valid email address for shipping updates.</div>
                            </div>
                            <div className="mb-3">
                                <label>Address</label>
                                <Form.Control type="text" placeholder="" name="address" />
                            </div>
                            <div className="mb-3">
                                <label>Address2<span className="text-muted">(Optional)</span></label>
                                <Form.Control type="text" name="address2" />
                            </div>
                            <Row>
                                <Col className="col-md-6 mb-3">
                                    <label>Country</label>
                                    <Form.Select name="countryCode" onChange={handleChange}>
                                        <option value={'AE'} selected>United Arab Emirates</option>
                                        <option value={'IN'}>India</option>
                                        <option value={'US'}>United State</option>
                                    </Form.Select>
                                </Col>
                                <Col className="col-md-6 mb-3">
                                    <label>Lanuage</label>
                                    <Form.Select name="languageCode" onChange={handleChange}>
                                        <option value={'EN'} selected>English</option>
                                        <option value={'HN'}>Hindi</option>
                                        <option value={'FR'}>French</option>
                                    </Form.Select>
                                    <div className="invalid-feedback">Please select a valid country.</div>
                                </Col>                          
                            </Row>
                            <Row>
                                <Col className="col-md-12 mb-3">    
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                        name="orderNote"
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            
                            <hr className="mb-4"/>
                            <Form.Check type="checkbox" label= "Shipping address is the same as my billing address"/>
                            <Form.Check type="checkbox" label= "Save this information for next time"/>



                            <hr className="mb-4"/>
                            <h4 className="mb-3">Payment</h4>
                                <div className="d-block my-3">
                                <Form.Check type="radio" name="paymentMethod" label="COD" defaultChecked/>
                                <Form.Check type="radio" name="paymentMethod" label="Credit card" disabled/>
                                <Form.Check type="radio" name="paymentMethod" label="Debit card" disabled/>     
                                <Form.Check type="radio" name="paymentMethod" label="Paypal" disabled/>                            
                            </div>

                            <hr className="mb-4"/>
                            {!loading ? (
                                <Button className="btn btn-primary btn-lg btn-block" style={{width: '100%'}} type="submit">Continue to checkout</Button>
                            ) : (
                                <Button className="w-100" variant="primary" type="submit" disabled>Processing...</Button>
                            )}                            
                        </form>
                        <br/><br/>
                    </Col>
                </Row>
            </Container>
        }
        </>

    );
}
export default Checkout;