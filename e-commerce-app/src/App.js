// import logo from './logo.svg';
import './App.css';

import Cart from './components/Cart';
import Item from './components/Item';

import ItemPage from './components/ItemPage';
import {items} from './components/static-data.js';

import Nav from './components/Nav';

import React, {useState, useEffect} from 'react';



function App() {

  const [activeTab, setActiveTab ]= useState('items');

  return (

    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className='App-content'>
        {/* <span>Empty</span> */}
        <Content tab={activeTab} />
      </main>
    </div>
  );
}

const Content = ({tab}) => {
  switch(tab){
    case 'items':
      // return <span>the items</span>
      return <ItemPage items={items} />
    case 'cart':
      return <span>the cart</span>
    default:
      break;
  }
}

export default App;
