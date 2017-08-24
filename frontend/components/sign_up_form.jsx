import React from 'react';
import LoginForm from './login_form';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:'signup',
      email: '',
      username: '',
      password: '',
    };
    this.handleLink = this.handleLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLink(e) {
    e.preventDefault();
    this.setState({status: 'login'});
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    this.props.signup(user);
  }

  render() {
    if (this.state.status === 'signup') {
      return (
        <div>
          <form onSubmit={ this.handleSubmit }>
            <h2>Email</h2>
            <input onChange={this.handleChange('email')}
                   value={ this.state.email }/>
            <h2>Username</h2>
            <input onChange={this.handleChange('username')}
                   value={ this.state.username }/>
            <h2>Password</h2>
            <input type='password'
                   onChange={this.handleChange('password')}
                   value={ this.state.password }/><br/>
                 <button>Create Account</button><br/>
            <a onClick={this.handleLink}
               href=''
            >Already have an account? Sign In!</a>
          </form>
        </div>
      );
    } else {
      return <LoginForm />;
    }
  }
}

export default SignUpForm;
