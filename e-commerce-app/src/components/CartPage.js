import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';
import { items } from './static-data';

const cartItem = (p1) => {
    return p1.map(item =>
    <li key={item.id} className="CartPage-item">
        <Item item={item} />
    </li> );
}

const CartPage = ({items, onAddOne, onRemoveOne}) => {
    return(
        <ul className='CartPage-items'>
            <li>
                {cartItem(items)}
            </li>
        </ul>
    )
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
}
export default CartPage;
