import React from 'react';
import style from './style.scss';

import HelloWorld from '../HelloWorld';
import Counter from '../Counter';
import logo from '../../images/logo.png';

function App() {
  return (
    <div style={style}>
      <img src={logo} alt="logo" />
      <HelloWorld name="world" />
      Try clicking on the counters below:
      <Counter start={0} />
      <Counter start={100} />
    </div>
  );
}

export default App;
