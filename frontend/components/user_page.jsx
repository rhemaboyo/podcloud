import React from 'react';
import NavBar from './nav_bar';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar user={this.props.user} logout={this.props.logout}/>
        <img src={this.props.user.avatar}/>
        <img src={this.props.user.banner_image}/>
      </div>
    );
  }
}

export default UserPage;
