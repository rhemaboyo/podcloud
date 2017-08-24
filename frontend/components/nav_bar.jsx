import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className='nav-container'>
        <nav className='nav'>
          <button onClick={this.logout}>Sign Out</button>
          <button onClick={this.preventDefault}>{this.props.user.username}</button>
          <button onClick={this.preventDefault}>Upload</button>
          <img src='https://a-v2.sndcdn.com/assets/images/sc-icons/win8-2dc974a1.png'></img>
          <button onClick={this.preventDefault}>Home</button>
          <input onSubmit={this.preventDefault}
            placeholder='Search...'
            value=''/>
        </nav>
      </div>
    );
  }
}

export default NavBar;
