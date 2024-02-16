import { Col, Container, Dropdown, Row } from "react-bootstrap";
import GiftCard from "./GiftCard";
import Header from "../Header";

const Catalogue = () => {
    const catalogs = [
        {            
            "id": "CARD-99121",
            "name": "Amazon Gift Card",
            "brand": "Amazon",
            "usageInstructions": "To use this card login to www.cardinfo.com",
            "termsAndConditions": "Following are terms and conditions for this card",
            "giftCardInformation": "This card allows you to buy products from cardinfo.com",
            "fromValue": 1,
            "toValue": 1000,
            "currency": "AED",
            "cardFaceImage": "https://cdn.giftlov.com/img/AShsadJASH",
            "productId": 21312,
            "categories": [
                "Lifestyle"
            ]
        },
        {            
            "id": "CARD-99121",
            "name": "Amazon Gift Card",
            "brand": "Amazon",
            "usageInstructions": "To use this card login to www.cardinfo.com",
            "termsAndConditions": "Following are terms and conditions for this card",
            "giftCardInformation": "This card allows you to buy products from cardinfo.com",
            "fromValue": 1,
            "toValue": 1000,
            "currency": "AED",
            "cardFaceImage": "https://cdn.giftlov.com/img/AShsadJASH",
            "productId": 21312,
            "categories": [
                "Lifestyle"
            ]
        },
        {
            "id": "3", 
            "name": "item3"
        },        
        {
            "id": "4", 
            "name": "item4"
        },        
        {
            "id": "5", 
            "name": "item5"
        },        
        {
            "id": "6", 
            "name": "item6"
        },        
        {
            "id": "7", 
            "name": "item7"
        },        
        {
            "id": "8", 
            "name": "item8"
        },        
        {
            "id": "9", 
            "name": "item9"
        }
    ];



    return (
        <>
        <Header />
       <Container style={{marginTop: '32px'}}>
            <Row>
                <Col>248 BEST VALENTINE GIFTS ONLINE</Col>
                <Col>
                    <Dropdown className="float-end d-inline color-red">                        
                        <Dropdown.Toggle variant="" id="dropdown-basic">SORT BY: POPULAR GIFTS</Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row>
                {catalogs.map(catalog => 
                    <Col key={catalog.id} >
                        <GiftCard item={catalog}/>
                    </Col>
                )}

            </Row>
       </Container>
       </>
    );
}
export default Catalogue ;