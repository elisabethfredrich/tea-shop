import { CardDeck, Card, Container, Button } from "react-bootstrap";
import React from "react";


const ProductDetails = ({product}) => {
    return (
        <div>
        <div class="product-image">
            <img src={productImage} alt="Card image" />
          </div>
          <div class="product-description">
            <h4 class="product-title">{product.productName}</h4>
            <p class="card-text">
                {product.description}
            </p>
            <p class="card-text">{product.productPrice}</p>
        
            <Button onclick={()=> console.log()}>Add to basket</Button>
              </div>
        </div>
    )
}

export default ProductDetails;