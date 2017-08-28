import React from 'react';

class EpisodeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.props.receiveCurrentEp(this.props.episode);
  }
  render() {
    let playPauseButton = <i onClick={this.handlePlay}
       className="fa fa-play"
       id='playPause'
       aria-hidden="true"></i>;
    if (this.props.currentEp) {
      if (this.props.currentEp.id === this.props.episode.id) {
        playPauseButton = <i onClick={this.handlePause}
           className="fa fa-pause"
           id='playPause'
           aria-hidden="true"></i>;
      }
    }
    return(
      <li>
        <div className='episode-container'>
          {playPauseButton}
          <img className='episode' src={`${this.props.episode.imageUrl}`}/>
        </div>
      </li>
    );
  }
}

export default EpisodeIndexItem;
