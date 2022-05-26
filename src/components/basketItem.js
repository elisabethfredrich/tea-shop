import React, { useState } from "react";
import { Link} from "react-router-dom"

import { UserContext } from "./userContext";




const BasketItem = ({product,amount,updateHandler}) => {

const user = React.useContext(UserContext);  

const deleteItem = () =>{
    fetch(`http://localhost:9000/baskets/${user.userId}/products/${product.productId}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        mode: 'cors'
    })
    .then(updateHandler);

}

    return (
        <tr>
            <th scope="row"><img className="basket-img" src={product.image}/></th>
            <td>{product.productName}</td>
            <td>{amount}</td>
            <td>{parseInt(product.price.replaceAll(" dkk",""))*amount} dkk</td>
            <td><Link to="/basket" onClick={deleteItem} className="btn"> Delete from basket</Link></td>
        </tr>
    )
}

export default BasketItem;