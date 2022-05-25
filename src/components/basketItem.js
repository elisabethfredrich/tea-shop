import React, { useState } from "react";
import { Link} from "react-router-dom"




const BasketItem = ({product}) => {

    let customerId = {customerId: 1};
    let productId = {productId: 1};
    
const [cartItem, setCartItem] = useState()

let deleteItem = ({productID, customerID}) =>{
    fetch(`http://localhost:9000/baskets/${customerId}/products/${productId}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })

}

    return (
        <tr>
            <th scope="row"><img className="basket-img" src={product.image}/></th>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td><Link to="/basket" class="btn"> Delete from basket</Link></td>
        </tr>
    )
}

export default BasketItem;