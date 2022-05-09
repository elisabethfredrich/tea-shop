import { CardDeck, Card, Container, Button } from "react-bootstrap";
import React from "react";
import {
    Link
  } from "react-router-dom"


const Product = ({productName,productPrice,productImage}) => {
    return (
        <Card className="card">
        <Card.Img variant="top" img="true" src={productImage} alt="Card image"/>
        <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Text>{productPrice}</Card.Text>
            <Link to="/" className="btn">Home</Link>
            <Button className="btn" onClick={() => console.log("test")}>Add to basket</Button>
            <Button onClick={() => console.log("test")}>Read more</Button>
        </Card.Body>
      </Card>
    )
}

export default Product;