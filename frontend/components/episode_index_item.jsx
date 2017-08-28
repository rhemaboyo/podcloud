import React from 'react';

class EpisodeIndexItem extends React.Component {
  render() {
    const playPauseButton = //this.props.playing === this.props.episode ?
      <i className="fa fa-pause"
         id='playPause'
         aria-hidden="true"></i>;
        // <i className="fa fa-play"
        //    id='playPause'
        //    aria-hidden="true"></i>;
    return(
      <li>
        <div className='episode-container'>
          {playPauseButton}
          <img className='episode' src={`${this.props.episode.image_url}`}/>
        </div>
      </li>
    );
  }
}

export default EpisodeIndexItem;
