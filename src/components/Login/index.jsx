import React from 'react';
import { observer, inject } from 'mobx-react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  login = () => {
    this.props.store.login(this.state.text)
    this.props.router.push('/');
  }

  changeText = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeText}/>
        <button
          type='submit'
          onClick={this.login}
        >
          login
        </button>
      </div>
    );
  }
};

export { Login }
export default inject('store', 'router')(observer(Login));
