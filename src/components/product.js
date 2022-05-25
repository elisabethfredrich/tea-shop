import { Card, Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

const Product = ({product}) => {

  let history = useHistory();
  
  function moveToProductDetails(productId){
      history.push(`/products/${productId}`)
  }

 /*  const handleAddToBasket = () => moveProductToBasket(product.id, 1) */


  let customerId = 1;
  let productId = 1;


   function moveProductToBasket(productId, customerId){
   fetch(`http://localhost:9000/baskets/${customerId}/products`,{
      method:'POST', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(productId)
    }).then(()=>{
      console.log('Product is added to basket')
    })
  } 
   
    return (
        <Card className="card">
        <Card.Img variant="top" img="true" src={product.image} alt="Card image"/>
        <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Link to="/" className="btn">Home</Link>
            <Button onClick={() => moveProductToBasket(customerId,productId)}>Add to basket</Button>
            <Button onClick={() => moveToProductDetails(product.productId)}>Read more</Button>

            {/* Another way to make the buttons: */}
            {/* <Link className="btn" to={`/products/${product.productName.replaceAll(" ", "")}`}>Read more</Link> */}
        </Card.Body>
      </Card>
    )
}

export default Product;