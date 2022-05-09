import { CardDeck, Card, Container, Button } from "react-bootstrap";
import React from "react";
import Product from './product';

const ProductList = ({products}) => {
    return (
        <CardDeck>
            {products.map((product) => (<Product key={product.productId} productName={product.productName} productPrice={product.price} productImage={product.image}/>))}
        </CardDeck>
    )
}

export default ProductList;