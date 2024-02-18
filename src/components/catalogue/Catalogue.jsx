import { Col, Container, Dropdown, Row } from "react-bootstrap";
import GiftCard from "./GiftCard";
import { useEffect, useState } from "react";
import { getCatalogItems } from "../../api/api";
import Header from "../header/Header";
import useCart from "../../hooks/useCart";

// const items = [
//     {            
//         "id": "CARD-99121",
//         "name": "Amazon Gift Card",
//         "brand": "Amazon",
//         "usageInstructions": "To use this card login to www.cardinfo.com",
//         "termsAndConditions": "Following are terms and conditions for this card",
//         "giftCardInformation": "This card allows you to buy products from cardinfo.com",
//         "fromValue": 1,
//         "toValue": 1000,
//         "currency": "AED",
//         "cardFaceImage": "https://cdn.giftlov.com/img/AShsadJASH",
//         "productId": 21312,
//         "categories": [
//             "Lifestyle"
//         ]
//     },
//     {            
//         "id": "CARD-99121",
//         "name": "Amazon Gift Card",
//         "brand": "Amazon",
//         "usageInstructions": "To use this card login to www.cardinfo.com",
//         "termsAndConditions": "Following are terms and conditions for this card",
//         "giftCardInformation": "This card allows you to buy products from cardinfo.com",
//         "fromValue": 1,
//         "toValue": 1000,
//         "currency": "AED",
//         "cardFaceImage": "https://cdn.giftlov.com/img/AShsadJASH",
//         "productId": 21312,
//         "categories": [
//             "Lifestyle"
//         ]
//     },
//     {
//         "id": "3", 
//         "name": "item3"
//     },        
//     {
//         "id": "4", 
//         "name": "item4"
//     },        
//     {
//         "id": "5", 
//         "name": "item5"
//     },        
//     {
//         "id": "6", 
//         "name": "item6"
//     },        
//     {
//         "id": "7", 
//         "name": "item7"
//     },        
//     {
//         "id": "8", 
//         "name": "item8"
//     },        
//     {
//         "id": "9", 
//         "name": "item9"
//     }
// ];

const Catalogue = () => {
    //const {setAuth} = useCart();
    const [catalogs, setCAtalogItems] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCatalogItems().then(items => {
            setCAtalogItems(items);
            const categories = items.flatMap(it => it.categories);
            const uniqueCategories = new Set(categories);
            setCategories(Array.from(uniqueCategories));
        });
    }, []);

    const filterItems = (category) => {
        console.log("filterItems", category);

    }


    return (
        <>
        <Header />
       <Container style={{marginTop: '32px'}}>
            <Row>
                <Col>{catalogs.length} BEST VALENTINE GIFTS ONLINE</Col>
                <Col>
                    <Dropdown className="float-end d-inline color-red" onSelect={filterItems}>                        
                        <Dropdown.Toggle variant="" id="dropdown-basic">SORT BY: POPULAR GIFTS</Dropdown.Toggle>

                        <Dropdown.Menu>                            
                            {categories.map(category => (
                                <Dropdown.Item eventKey={category} key={category} >{category}</Dropdown.Item>
                                )
                            )}                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row>
                {catalogs.map(catalog => 
                    <Col key={catalog.id} className="mt-4">
                        <GiftCard item={catalog}/>
                    </Col>
                )}
            </Row>
       </Container>
       </>
    );
}
export default Catalogue ;