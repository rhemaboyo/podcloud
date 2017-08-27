import React from 'react';
import NavBarContainer from './nav_bar_container';
import EpisodeIndexItem from './episode_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllEpisodes();
  }

  render() {
    if (!this.props.episodes) return null;
    const episodes = this.props.episodes.map( episode => <EpisodeIndexItem/>);
    return (
      <div>
        <NavBarContainer/>
          <div className='body'>
            <div className='track-container'>

            </div>
          </div>
      </div>
    );
  }
}

export default TrackIndex;
