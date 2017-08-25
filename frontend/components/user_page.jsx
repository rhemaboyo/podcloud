import React from 'react';
import NavBar from './nav_bar';
import AvatarCropper from 'react-avatar-cropper';

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
          <p>{this.props.user.username}</p>
          <div className="banner-image-wrapper">
            <img src={this.props.user.banner_image} className='user-banner'/>
            <label htmlFor="banner-upload">
              <i className="fa fa-camera" aria-hidden="true"></i>
              Update Banner
              <input type="file" id="files" className="hidden"/>
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
