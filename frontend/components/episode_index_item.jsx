import React from 'react';

class EpisodeIndexItem extends React.Component {
  render() {
    return(
      <li>
        <img src={`${this.props.episode.image_url}`}/>
      </li>
    );
  }
}

export default EpisodeIndexItem;
