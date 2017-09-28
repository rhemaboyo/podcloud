import React from 'react';
import NavBarContainer from './nav_bar_container';
import PodcastIndexItem from './podcast_index_item';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const podcasts = this.props.podcasts.map( podcast => {
      return <PodcastIndexItem key={podcast.id} podcast={podcast}/>;
    });
    return (
      <div>
        <NavBarContainer/>
          <div className='body'>
            <div className='track-container'>
              <div className='tabs' id='latest'>Results</div>
              <ul className='episode-bucket'>{podcasts}</ul>
            </div>
          </div>
      </div>
    );
  }
}

export default SearchPage;
