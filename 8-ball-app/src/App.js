// import logo from './logo.svg';
import './App.css';
// import './EightBall.css'

import EightBall from './components/EightBall';
import InputOutPut from './components/InputOutput';
import ListOfQuestions  from './components/List.jsx';

function App() {
  return (
    <div className="App">
      <h1>Magic 8-Ball</h1>
      <EightBall>
        {/* <img src="https://cdn.picpng.com/billiard/billiard-hd-36013.png" alt=" "></img> */}
      </EightBall>
      <InputOutPut />
      <ListOfQuestions />
    </div>
  );
}

export default App;
