
import React from 'react';
import PropTypes from 'prop-types';
import { items } from './static-data';
// import Item from `./Item`;
import Item from './Item';

// class ItemPage extends React.Component{
//     render(){
//         return(
//             <h1>This is the ItemPage</h1>

//         )
//     }
// }

// let products = items.map(item => 
// <li key={item.id} className="ItemPage-item">
//     {/* {item.name} */}
//     <Item item={item} onAddToCart={() => onAddToCart(item)}/>
// </li>);


let products =  (p1, p2) => {
    return p1.map(item =>
        <li key={item.id} className="ItemPage-item">
            {/* {item.name} */}
            <Item item={item} p2={() => p2(item)}>
                <button className='Item-addToCart' onClick={() => p2(item)}>
                    Add to Cart
                </button>
            </Item>
        </li>);
}

function ItemPage ({items, onAddToCart}){
    return(
        // <h1>This is the ItemPage</h1>
        <ul className="ItemPage-items">
            {/* {items.map(item => <li key={item.id} className="ItemPage-item">{item.name}</li>)} */}
            {products(items, onAddToCart)}
        </ul>
    )
}
ItemPage.propTypes = {items: PropTypes.array};

export default ItemPage;
