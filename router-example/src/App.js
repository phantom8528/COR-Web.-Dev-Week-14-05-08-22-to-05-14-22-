// import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

//ADDING A ROUTER COMPONENT
import {
  BrowserRouter as Router,
  // Switch, <-- No longer a part of react, use Routes instead
  Routes,
  Route,
  Link

} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/blog'>Blog</Link>
                  <Link to='/about'>About</Link>
              </nav>
          </div>
          <Routes>
              <Route exact path='/' element={<Home />}>
                  {/* <Home /> */}
              </Route>
              <Route path='/blog' element={<Blog />}>
                  {/* <Blog /> */}
              </Route>
              <Route path='/about' element={<About />}>
                  {/* <About /> */}
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
