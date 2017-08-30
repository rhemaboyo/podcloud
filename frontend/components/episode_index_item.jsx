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
    let editButton = null;
    if (this.props.page === 'upload') {
      editButton = <button onClick={e => this.openModal(e, 'edit', this.episode.id)}
        className='edit-button'>EditEpisode</button>;
    }
    let enjoy = null;
    let playPauseButton = <i onClick={this.handlePlay}
       className="fa fa-play"
       id='playPause'
       aria-hidden="true"></i>;
    if (this.props.currentEp === this.props.episode.id) {
        playPauseButton = null;
        enjoy = <p className='enjoy'>ENJOY...</p>;
    }
    return(
      <li>
        <div className='episode-container'>
          {playPauseButton}
          {enjoy}
          <img className='episode' src={`${this.props.episode.imageUrl}`}/>
        </div>
      </li>
    );
  }
}

export default EpisodeIndexItem;
