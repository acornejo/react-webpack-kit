import React from 'react';
import style from './style';

function HelloWorld({ name }) {
  return <div className='hello'>Hello {name}!</div>;
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default HelloWorld;
