import './App.css';
import React from 'react';
import FoBrand from './Components/4-Brand';
import FvBrand from './Components/5-Brand';
import SiBrand from './Components/6-Brand';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <h1 className='appName'>Resistor colors Code</h1>
      <Router>
        <div>
          <ul className='horizontal-colorBar'>
            <li>
              <Link to="/">4 Brand</Link>
            </li>
            <li>
              <Link to="/4-brand">5 Brand</Link>
            </li>
            <li>
              <Link to="/5-brand">6 Brand</Link>
            </li>
          </ul>        
          <Routes>
            <Route path="/" exact  element={<FoBrand />}></Route>
            <Route path="/4-brand" element={<FvBrand />}></Route>
            <Route path="/5-brand" element={<SiBrand />}></Route>
          </Routes>
        </div>
      </Router>
      <div className='app-Ver'>
        <div>App version 1.0.0</div>
      </div>
    </React.Fragment>
  );
}

export default App;
