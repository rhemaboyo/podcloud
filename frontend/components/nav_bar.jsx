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
      <nav className='nav'>
        <button onClick={this.logout}>Sign Out</button>
          <p>{this.props.user.username}</p>
      </nav>
    );
  }
}

export default NavBar;
