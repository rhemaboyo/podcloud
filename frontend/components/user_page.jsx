import React from 'react';
import NavBar from './nav_bar';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='user-container'>
        <NavBar user={this.props.user} logout={this.props.logout}/>
        <div className='user-image-container'>
          <img src={this.props.user.avatar} className='avatar'/>
          <img src={this.props.user.banner_image} className='user-banner'/>
          <p>{this.props.user.username}</p>
        </div>
        <div className='user-body'>
          <div className='track-container'></div>
        </div>
      </div>
    );
  }
}

export default UserPage;
