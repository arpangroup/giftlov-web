import { Button, Card } from "react-bootstrap";

import BackgroundImage from "../../assets/images/background.png";

const GiftCard = (props) => { 
    //const {id, name, brand, usageInstructions, termsAndConditions, giftCardInformation, fromValue, toValue, currency, cardFaceImage, productId, categories} = props;
    const {item} = props;

    return (
        <Card style={{ minWidth: '18rem' }}>
        <Card.Img variant="top" src={BackgroundImage} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cads content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}
export default GiftCard ;