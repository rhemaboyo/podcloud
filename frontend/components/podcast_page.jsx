import React from 'react';
import NavBarContainer from './nav_bar_container';

class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.podcast) {
      this.props.requestSinglePodcast(this.props.match.params.itunesId);
    }
  }

  render() {
    if (!this.props.podcast) return null;
    return (
      <div className='podcast-container'>
        <audio src={`${this.state.audioUrl}`}></audio>
      </div>
    );
  }
}

export default PodcastPage;
