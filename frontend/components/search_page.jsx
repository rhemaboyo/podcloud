import React from 'react';
import NavBarContainer from './nav_bar_container';
import PodcastIndexItem from './podcast_index_item';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let podcasts = this.props.podcasts.map( podcast => {
      return <PodcastIndexItem key={podcast.id} podcast={podcast}/>;
    });
    let results = "Results";
    if (podcasts.length === 0) {
      results = "No Results Found.";
    }
    return (
      <div>
        <NavBarContainer/>
          <div className='user-body'>
            <div className='user-track-container'>
              <div className='tabs' id='latest'>{results}</div>
              <ul className='episode-bucket'>{podcasts}</ul>
            </div>
          </div>
      </div>
    );
  }
}

export default SearchPage;
