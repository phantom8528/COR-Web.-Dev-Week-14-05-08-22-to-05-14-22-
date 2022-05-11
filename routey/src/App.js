import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom';

class App extends React.Component {

  render(){
    return(
      <div>
        {/* <h1>This is my App</h1> */}

        <Router>
          <div>
            <nav>
              {/* Links will go here */}
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
          </div>
          
          <Routes>
            <Route path="/" element={<Home />}>

            </Route>

            <Route path="/About" element={<About />}>
            
            </Route>

            <Route path="/Contact" element={<Contact />}>
          
            </Route>
          </Routes>
    
        </Router>

      </div>
    )
  }
}

export default App;