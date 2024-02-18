import { Button, Card } from "react-bootstrap";

import BackgroundImage from "../../assets/images/background.png";
import useCart from "../../hooks/useCart";

const GiftCard = (props) => { 
    const {setCart, isItemExistInCart} = useCart();
    const {item} = props;  

    const isItemAddes = () => isItemExistInCart(item);    

    return (
        <Card style={{ minWidth: '18rem' }}>
        <Card.Img variant="top" src={item.cardFaceImage} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.giftCardInformation}</Card.Text>
            <Button 
            variant={isItemAddes() ? "secondary" : "primary"}
            disabled={isItemAddes()}
            onClick={() => setCart(item)}
            >Add to cart</Button>
        </Card.Body>
        </Card>
    );
}
export default GiftCard ;