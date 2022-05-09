import { CardDeck, Card, Container, Button } from "react-bootstrap";
import React from "react";


const Product = ({productName,productPrice,productImage}) => {
    return (
        <Card className="card">
        <Card.Img variant="top" img src='/img/greenteas/matcha.png' alt="Card image"/>
        <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Text>{productPrice}</Card.Text>
            <Button onClick={() => console.log("test")}>Add to basket</Button>
            <Button onClick={() => console.log("test")}>Read more</Button>
        </Card.Body>
      </Card>
    )
}

export default Product;