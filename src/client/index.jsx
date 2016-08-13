import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <HelloWorld name="world"/>
      Try clicking on the counters below:
      <Counter start={0}/>
      <Counter start={100}/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
