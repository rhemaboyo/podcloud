import React from 'react';
import NavBarContainer from './nav_bar_container';
import EpisodeIndexItem from './episode_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllEpisodes();
  }

  render() {
    if (!this.props.episodes) return null;
    const episodes = this.props.episodes.map( episode => {
      return <EpisodeIndexItem episode={episode} key={episode.id}/>;
    });
    return (
      <div>
        <NavBarContainer/>
          <div className='body'>
            <div className='track-container'>
              <ul>{episodes}</ul>
            </div>
          </div>
      </div>
    );
  }
}

export default TrackIndex;
