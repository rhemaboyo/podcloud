import React from 'react';

class EpisodeIndexItem extends React.Component {
  render() {
    return(
      <li>
        <div className='episode'>
          <img className='episode' src={`${this.props.episode.image_url}`}/>
          <i class="fa fa-play" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}

export default EpisodeIndexItem;
