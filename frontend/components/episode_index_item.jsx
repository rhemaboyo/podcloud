import React from 'react';
import { Link } from 'react-router-dom';

class EpisodeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlePlay() {
    this.props.receiveCurrentEp(this.props.episode);
  }

  handleDelete() {
    this.props.deleteEpisode(this.props.episode);
  }

  render() {
    let [editButton, deleteButton] = [null, null];
    let [title, epclass] = [this.props.episode.podcastTitle, 'none'];
    if (this.props.page === 'podcast') {
      title = null;
      epclass = 'ep-bold';
    }
    if (this.props.page === 'podcast' && this.props.userId === this.props.adminId) {
      editButton = <button onClick={e => this.props.openModal(e, 'edit', this.props.episode.id)}
        className='edit-button'>EditEpisode</button>;
        deleteButton = <button onClick={this.handleDelete}>Delete</button>;
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
      <li >
        <div className='episode-container'>
          <div className='epitem'>
            {editButton}
            {deleteButton}
          </div>
          {playPauseButton}
          {enjoy}
          <img className='episode' src={`${this.props.episode.imageUrl}`}/>
          <div className='ep-title'>
            <Link to={`/podcasts/${this.props.episode.podcastId}`}>{title}</Link>
            <Link to={`/episodes/${this.props.episode.id}`} className={epclass}>{this.props.episode.title}</Link>
          </div>
        </div>
      </li>
    );
  }
}

export default EpisodeIndexItem;
