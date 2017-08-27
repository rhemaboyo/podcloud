import React from 'react';
import NavBarContainer from './nav_bar_container';

class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.podcast) {
      this.props.requestSinglePodcast(this.props.match.params.itunesId);
    }
  }

  handleClick() {
    this.music.play();
  }


  render() {
    if (!this.props.podcast) return null;
    return (
      <div className='podcast-container'>
        <button onClick={this.handleClick}>play</button>
        <audio ref={(audio) => this.audio = audio} src={`${this.props.podcast.episodes[0].audio_url}`}></audio>
      </div>
    );
  }
}

export default PodcastPage;
