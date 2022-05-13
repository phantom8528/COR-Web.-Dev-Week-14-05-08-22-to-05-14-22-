import React from 'react';
// import App from '../App';
// import {Component} from 'react'

// import {useState} from 'react';


// class Nav extends React.Component{
//     // const [activeTab, setActiveTab ]= useState('items'); //<-- DOESN'T WORK
//     // const {activeTab, setActiveTab} = props; //<-- DOESN'T WORK
//     render(){
//         // const itemClass = (tabName) => `App-nav-item ${(activeTab === tabName)? 'selected': ' '}`;

//         return(
//             // <h1>This is the Navigation Bar</h1>
//             <nav className='App-nav'>
//                 <ul>
//                     <li className='App-nav-item'><button>Items</button></li> 
//                     {/* <li className={itemClass('items')}><button onClick={() => onTabChange('items')}>Items</button></li>  */}
//                     <li className='App-nav-item'><button>Cart</button></li>
//                     {/* <li className={itemClass('cart')}><button onClick={() => onTabChange('cart')}>Cart</button></li>  */}

//                 </ul>
//             </nav>

//         )
//     }
// }

const Nav =  ({activeTab, onTabChange}) => {

    // const itemClass = (tabName) => `App-nav-item ${(activeTab === tabName) ? 'selected': ' '}`;
    const itemClass = (tabName) => `  App-nav-item ${  (activeTab === tabName) ? 'selected' : ''}  `;

    return(
        // <h1>This is the Navigation Bar</h1>
        <nav className='App-nav'>
            <ul>
                {/* <li className='App-nav-item'><button>Items</button></li>  */}
                <li className={itemClass('items')}><button onClick={() => onTabChange('items')}>Items</button></li> 
                {/* <li className='App-nav-item'><button>Cart</button></li> */}
                <li className={itemClass('cart')}><button onClick={() => onTabChange('cart')}>Cart</button></li> 

            </ul>
        </nav>
    )
}



export default Nav;