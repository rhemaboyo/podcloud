import React from 'react';
import LoginForm from './login_form';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status:'signup'};
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(e) {
    e.preventDefault();
    this.setState({status: 'login'});
  }

  render() {
    if (this.state.status === 'signup') {
      return (
        <div>
          <form>
            <h2>Email</h2>
            <input />
            <h2>Username</h2>
            <input />
            <h2>Password</h2>
            <input type='password' /><br/>
            <button>Create Account</button><br/>
            <a onClick={this.handleLink}
               href=''
            >Already have an account? Log In!</a>
          </form>
        </div>
      );
    } else {
      return <LoginForm />;
    }
  }
}

export default SignUpForm;
