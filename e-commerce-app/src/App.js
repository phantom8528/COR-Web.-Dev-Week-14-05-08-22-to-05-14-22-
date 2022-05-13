// import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import Item from './components/Item';
import CartPage from './components/CartPage';
import ItemPage from './components/ItemPage';
import {items} from './components/static-data.js';
import Nav from './components/Nav';

import React, {useState, useEffect} from 'react';

const summarizeCart = (cart) => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {...item, count: 0}
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupItems);
};



function App() {

  const [activeTab, setActiveTab ]= useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  //Remove Cart Items
  const removeItem = (item) => {
    let index = cart.findIndex(i => i.id === item.id);
    if (index >= 0){
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      })
    }
  }

  return (

    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className='App-content'>
        {/* <span>Empty</span> */}
        <Content 
          tab={activeTab} 
          onAddToCart={addToCart}
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}
        />
      </main>
    </div>
  );
}

const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
  switch(tab){
    case 'items':
      // return <span>the items</span>
      return <ItemPage items={items} onAddToCart={onAddToCart} />
    case 'cart':
      // return <span>the cart</span>
      return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem} />
    default:
      break;
  }
}

export default App;

