import React from 'react';
import NavBar from './nav_bar';
import AvatarImageCropper from 'react-avatar-image-cropper';

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
        <NavBar user={this.props.user} logout={this.props.logout}/>
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
        <div className='user-body'>
          <div className='track-container'></div>
        </div>
      </div>
    );
  }
}

// class FileUpload extends React.Component{
//
//   handleFile(e) {
//     var reader = new FileReader();
//     var file = e.target.files[0];
//
//     if (!file) return;
//
//     reader.onload = function(img) {
//       ReactDom.findDOMNode(this.refs.in).value = '';
//       this.props.handleFileChange(img.target.result);
//     }.bind(this);
//     reader.readAsDataURL(file);
//   }
//
//   render() {
//     return (
//       <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
//     );
//   }
// }

export default UserPage;
