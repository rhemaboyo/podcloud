import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authType:this.props.authType,
      email: '',
      username: '',
      password: '',
    };
    this.handleLink = this.handleLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLink(e) {
    e.preventDefault();
    const type = this.state.authType === 'login' ? 'signup' : 'login';
    this.setState({authType: type});
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
    if (this.state.authType === 'signup') {
      this.props.signup(user);
    } else {
      this.props.login(user);
    }
  }

  render() {
    let email, buttonText, linkText;
    if (this.state.authType === 'signup') {
      email = <input onChange={this.handleChange('email')}
             placeholder='Email...'
             value={ this.state.email }/>;
      buttonText = 'Creat Account';
      linkText = 'Already have and account? Sign In!';
    } else {
      email = null;
      buttonText = 'Sign In';
      linkText = "Don't have an account? Sign up!";
    }
    return (
      <div>
        <button className='close'
                onClick={this.props.closeModal}
        >&#10006;</button>
        <form className='auth' onSubmit={ this.handleSubmit }>
          {email}
          <input onChange={this.handleChange('username')}
                 placeholder='Username...'
                 value={ this.state.username }/>
          <input type='password'
                 onChange={this.handleChange('password')}
                 placeholder='Password...'
                 value={ this.state.password }/>
               <button>{buttonText}</button>
          <a onClick={this.handleLink}
             href=''
          >{linkText}</a>
        <p>{this.props.errors}</p>
        </form>
      </div>
    );
  }
}

export default AuthForm;
