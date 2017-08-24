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
        <form className='auth' onSubmit={ this.handleSubmit }>
          <input onChange={this.handleChange('email')}
                 placeholder='Email...'
                 value={ this.state.email }/>
          <input onChange={this.handleChange('username')}
                 placeholder='Username...'
                 value={ this.state.username }/>
          <input type='password'
                 onChange={this.handleChange('password')}
                 placeholder='Password...'
                 value={ this.state.password }/>
               <button>Create Account</button>
          <a onClick={this.handleLink}
             href=''
          >Already have an account? Sign In!</a>
        <p>{this.props.errors}</p>
        </form>
      );
    } else {
      return <LoginForm />;
    }
  }
}

export default SignUpForm;
