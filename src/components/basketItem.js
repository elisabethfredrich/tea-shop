import React, { useState } from "react";
import { Link} from "react-router-dom"




const BasketItem = ({product,user,updateHandler}) => {


const deleteItem = () =>{
    fetch(`http://localhost:9000/baskets/${user.customerId}/products/${product.productId}`,{
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
            <td>{product.price}</td>
            <td><Link to="/basket" onClick={deleteItem} className="btn"> Delete from basket</Link></td>
        </tr>
    )
}

export default BasketItem;