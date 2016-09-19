import React from 'react';

import HelloWorld from '../HelloWorld';
import Counter from '../Counter';
import logo from '../../images/logo.png';
import './style.css';

function App() {
  return (
    <div className="app">
      <img src={logo} alt="logo" />
      <HelloWorld name="world" />
      Try clicking on the counters below:
      <Counter start={0} />
      <Counter start={100} />
    </div>
  );
}

export default App;
