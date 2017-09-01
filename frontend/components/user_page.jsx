import React from 'react';
import NavBarContainer from './nav_bar_container';
import {Link} from 'react-router-dom';
import PodcastIndexItem from './podcast_index_item';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      page: 'recommended',
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username){
      this.props.getUser(nextProps.match.params.username);
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
    this.props.getAllPodcasts();
  }

  handleUpload(e, key) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    if (file) formData.append(`user[${key}]`, file);
    this.props.editUser(this.props.user.id, formData);
  }

  changePage(page) {
    this.setState({page: page});
  }

  render() {
    const {pageUser} = this.props;
    if (!this.props.pageUser) return null;
    let [recommends, created] = [null, null];
    let [tab1, tab2]= ['orange', 'black'];
    if (this.state.page === 'recommended') {
      recommends = this.props.podcasts.map( podcast => {
        return <PodcastIndexItem key={podcast.id} podcast={podcast}/>;
      });
    } else {
      created = this.props.podcasts.filter( podcast => {
        return podcast.admin_id === pageUser.id;
      }).map( podcast => {
        return <PodcastIndexItem key={podcast.id} podcast={podcast}/>;
      });
    }
    if (this.state.page === 'created') [tab1, tab2] = ['black', 'orange'];
    return (
      <div>
      <div className='user-container'>
        <NavBarContainer/>
        <div className='user-image-container'>
          <img src={this.props.pageUser.avatar} className='avatar'/>
          <div className='avatar'>
            <label htmlFor="avatar-upload" className='avatar-upload-label'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              Update Avatar
              <input type="file" id="avatar-upload"
                  onChange={e => this.handleUpload(e, 'avatar')}/>
              </label>
          </div>
          <p>{this.props.pageUser.username}</p>
          <div className="banner-image-wrapper">
            <img src={this.props.pageUser.bannerImage} className='user-banner'/>
            <label htmlFor="banner-upload" className='banner-upload-label'>
              <i className="fa fa-camera" aria-hidden="true"></i>
              Update Banner
              <input type="file" id="banner-upload"
                  onChange={e => this.handleUpload(e, 'banner_image')}/>
            </label>
          </div>
        </div>
      </div>
      <div className='user-body'>
        <div className='user-track-container'>
          <div className='tabs'>
            <a onClick={() => this.changePage('recommended')}
               className={tab1}>Recommended Podcasts</a>
            <a onClick={() => this.changePage('created')}
               className={tab2}>Created Podcasts</a>
          </div>
          <div className='rec-bucket'>
            {recommends}
            {created}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default UserPage;
