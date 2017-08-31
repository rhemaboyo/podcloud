import React from 'react';
import NavBarContainer from './nav_bar_container';

class EpisodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment({ episode { body: this.state.comment);
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.requestSingleEpisode(id);
  }
  render() {
    if (!this.props.episode) return null;
    return(
      <div>
        <NavBarContainer/>
        <div className="episode-banner-wrapper">
          <div className='episode-image-container'>
            <img src="https://s3.amazonaws.com/podcloud-dev/ezgif.com-crop.gif" className='episode-banner'/>
            <img src={this.props.episode.imageUrl} className='episode-logo'/>
          </div>
        </div>
        <div className='body'>
          <div className='track-container'>
            <form onSubmit={this.handleSubmit}>
              <input type='text'
                onChange={this.handleChange}
                placeholder='Leave a comment...'
                className='comment-input'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EpisodePage;
