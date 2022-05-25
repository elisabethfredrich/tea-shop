import { CardDeck } from "react-bootstrap";
import React from "react";
import Product from './product';

const ProductList = ({products,user}) => {
    return (
        <div className="card-container">
        <div className="flex-card-wrapper">
            <CardDeck>
                {products.map((product) => (<Product key={product.productId} product={product} user={user}/>))}
            </CardDeck>
        </div></div>
    )
}

export default ProductList;