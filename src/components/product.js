import { Card, Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

const Product = ({product}) => {

  let history = useHistory();
  
  function moveToProductDetails(productName){
      history.push(`/products/${productName.replaceAll(" ", "")}`)
  }

    return (
        <Card className="card">
        <Card.Img variant="top" img="true" src={product.image} alt="Card image"/>
        <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Link to="/" className="btn">Home</Link>
            <Button className="btn" onClick={() => console.log("test")}>Add to basket</Button>
            <Button onClick={() => moveToProductDetails(product.productName)}>Read more</Button>

            {/* Another way to make the buttons: */}
            {/* <Link className="btn" to={`/products/${product.productName.replaceAll(" ", "")}`}>Read more</Link> */}
        </Card.Body>
      </Card>
    )
}

export default Product;