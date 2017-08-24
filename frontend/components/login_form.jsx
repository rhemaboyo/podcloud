import React from 'react';
import SignUpForm from './sign_up_form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:'login',
      username: '',
      password: '',
    };
    this.handleLink = this.handleLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLink(e) {
    e.preventDefault();
    this.setState({status: 'signup'});
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
  }

  render() {
    if (this.state.status === 'login') {
      return (
        <form className='auth' onSubmit={ this.handleSubmit }>
          <input onChange={this.handleChange('username')}
                 placeholder='Username...'
                 value={ this.state.username }/>
          <input type='password'
                 onChange={this.handleChange('password')}
                 placeholder='Password...'
                 value={ this.state.password }/>
          <button>Sign In</button>
          <a onClick={this.handleLink}
             href=''
          >Don't have an account? Sign up!</a>
        </form>
      );
    } else {
      return <SignUpForm />;
    }
  }
}

export default LoginForm;
