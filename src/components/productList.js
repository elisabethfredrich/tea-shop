import { CardDeck, Card, Container, Button } from "react-bootstrap";
import React from "react";
import Product from './product';

const ProductList = ({products}) => {
    return (
        <div className="card-container">
        <div className="flex-card-wrapper">
            <CardDeck>
                {products.map((product) => (<Product key={product.productId} product={product}/>))}
            </CardDeck>
        </div></div>
    )
}

export default ProductList;