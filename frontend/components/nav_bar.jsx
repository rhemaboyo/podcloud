import React from 'react';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className='nav-container'>
        <nav className='nav'>
          <button onClick={this.logout}>Sign Out</button>
          <button>{this.props.user.username}</button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
