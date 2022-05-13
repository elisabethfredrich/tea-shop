import React from "react";
import { Link} from "react-router-dom"

const BasketItem = ({product}) => {
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