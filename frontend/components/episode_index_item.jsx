import React from 'react';

class EpisodeIndexItem extends React.Component {
  constructor() {
    super();
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.props.receiveCurrentEp(this.props.episode);
  }
  render() {
    const playPauseButton = this.props.currentEp === this.props.episode ?
      <i className="fa fa-pause"
         id='playPause'
         aria-hidden="true"></i> :
        <i onClick={this.handlePlay}
           className="fa fa-play"
           id='playPause'
           aria-hidden="true"></i>;
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
