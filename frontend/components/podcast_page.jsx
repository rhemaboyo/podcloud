import React from 'react';
import NavBarContainer from './nav_bar_container';
import Modal from 'react-modal';
import UploadEpisodeForm from './upload_episode_form';
import EpisodeIndexItem from './episode_index_item';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : '9000'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                 : '50%'
  }
};

class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      form: '',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e, form, editEp) {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
      form: form,
      editEp: editEp,
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.removeErrors();
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    // if (!this.props.podcast) {
    //   if (id[0] === 'o') {
    //     this.props.requestSinglePodcast(id.slice(9));
    //   } else {
    //     this.props.requestSinglePodcast(id);
    //   }
    // }
    // if (!this.props.podcast) {
      this.props.requestSinglePodcast(id);
    // }
  }

  render() {
    if (!this.props.podcast) return null;
    let uploadButton = null;
    if (this.props.user.id === this.props.podcast.adminId) {
      uploadButton = <button onClick={e => this.openModal(e, 'upload', null)}
                             className='episode-button'>Add a New Episode</button>;
    }
    const episodes = this.props.episodes.map( episode => {
      return <EpisodeIndexItem
        episode={episode}
        key={episode.id}
        currentEp={this.props.currentEp}
        receiveCurrentEp={this.props.receiveCurrentEp}
        openModal={this.openModal}
        page='podcast'/>;
    });
    return (
      <div>
        <NavBarContainer/>
        <div className="podcast-banner-wrapper">
          <div className='podcast-image-container'>
            <img src="https://s3.amazonaws.com/podcloud-dev/4354977344_47158f8c82_c.jpg" className='podcast-banner'/>
            <img src={this.props.podcast.logoUrl} className='podcast-logo'/>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal">
          <UploadEpisodeForm podcast={this.props.podcast}
            addOriginalEpisode={this.props.addOriginalEpisode}
            form={this.state.form}
            editEpisode={this.props.editEpisode}
            episodeId={this.state.editEp}
            errors={this.props.errors}/>
        </Modal>
        <div className='body'>
          <div className='track-container'>
          {uploadButton}
          <ul>{episodes}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PodcastPage;
