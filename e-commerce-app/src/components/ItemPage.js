
import React from 'react';
import PropTypes from 'prop-types';

// class ItemPage extends React.Component{
//     render(){
//         return(
//             <h1>This is the ItemPage</h1>

//         )
//     }
// }

function ItemPage (items){
    return(
        // <h1>This is the ItemPage</h1>
        <ul className="ItemPage-items">
            {items.map(item => <li key={item.id} className="ItemPage-item">{item.name}</li>)}
        </ul>
    )
}
ItemPage.propTypes = {items: React.PropTypes.array};

export default ItemPage;