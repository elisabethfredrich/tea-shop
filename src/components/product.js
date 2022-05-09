import { CardDeck, Card, Container, Button } from "react-bootstrap";



export const Product = () => {
    const handleClick = () => {
        console.log("test");
      };

    return (
        <Card className="card" style="max-width:8cm;">
        <Card.Img variant="top" src="img/greenteas/matcha.png" alt="Card image"/>
        <Card.Body>
            <Card.Title>Organic matcha tea</Card.Title>
            <Card.Text>35 dkk</Card.Text>
            <Button onClick={() => handleClick}>Add to basket</Button>
            <Button onClick={() => handleClick}>Read more</Button>
        </Card.Body>
      </Card>
    )
} 
