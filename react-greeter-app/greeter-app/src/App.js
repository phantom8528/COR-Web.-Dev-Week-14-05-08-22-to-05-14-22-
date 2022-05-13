import logo from './logo.svg';
import './App.css';

import Greeter from './components/Greeter'; //<-- 1. Import Greeter from components directory

// RENDERING AND ARRAY
//1. Create nameArray below
const nameArray = [
  "Melanie",
  "Emma",
  "Mel B",
  "Geri",
  "Victoria"
];

function App() {
  return (
    <div className="App">
      {/* <h1>Hello React</h1> */}
      <h1 className="greeting" >Hello Again, From React in Blue</h1>
      {/* 2. Creater a jsx tag for the greeter app */}
      {/* <Greeter name="Melanie"></Greeter>
      <Greeter name="Emma"></Greeter>
      <Greeter name="Mel B"></Greeter>
      <Greeter name="Geri"></Greeter>
      <Greeter name="Victoria"></Greeter> */}
      {/* Customize each greeting */}

      {/* For each name in nameArray, render Greeter */}
      {nameArray.map(n => <Greeter name={n}></Greeter>)}
 
    </div>
  );
}

export default App;

