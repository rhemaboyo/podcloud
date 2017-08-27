import React from 'react';
import NavBarContainer from './nav_bar_container';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e, key) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    if (file) formData.append(`user[${key}]`, file);
    this.props.editUser(this.props.user.id, formData);
  }



  render() {
    return (
      <div className='user-container'>
        <NavBarContainer/>
        <div className='user-image-container'>
          <img src={this.props.user.avatar} className='avatar'/>
          <div className='avatar'>
            <label htmlFor="avatar-upload" className='avatar-upload-label'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              Update Avatar
              <input type="file" id="avatar-upload"
                  onChange={e => this.handleUpload(e, 'avatar')}/>
              </label>
          </div>
          <p>{this.props.user.username}</p>
          <div className="banner-image-wrapper">
            <img src={this.props.user.banner_image} className='user-banner'/>
            <label htmlFor="banner-upload" className='banner-upload-label'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              Update Banner
              <input type="file" id="banner-upload"
                  onChange={e => this.handleUpload(e, 'banner_image')}/>
            </label>
          </div>
        </div>
        <div className='body'>
          <div className='track-container'></div>
        </div>
      </div>
    );
  }
}

export default UserPage;
