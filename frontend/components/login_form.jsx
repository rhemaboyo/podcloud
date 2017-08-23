import React from 'react';
import SignUpForm from './sign_up_form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status:'login'};
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(e) {
    e.preventDefault();
    this.setState({status: 'signup'});
  }

  render() {
    if (this.state.status === 'login') {
      return (
        <div>
          <form>
            <h2>Username</h2>
            <input />
            <h2>Password</h2>
            <input type='password' /><br/>
            <button>Sign In</button><br/>
            <a onClick={this.handleLink}
               href=''
            >Don't have an account? Sign up!</a>
          </form>
        </div>
      );
    } else {
      return <SignUpForm />;
    }
  }
}

export default LoginForm;
