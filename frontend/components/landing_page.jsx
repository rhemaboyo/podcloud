import React from 'react';
import Modal from 'react-modal';
import AuthForm from './auth_form';
import EpisodeIndexItemContainer from './episode_index_item_container';

const customStyles = {
  overlay : {
    zIndex            : '9999'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      buttonText: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentDidMount() {
    this.props.getSampleEpisodes();
  }

  openModal(e) {
    this.setState({
      modalIsOpen: true,
      buttonText: e.currentTarget.innerHTML
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.removeErrors();
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: 'Guest', password:'asdfgh'});
  }

  renderAuth() {
    const type = this.state.buttonText === 'Sign In' ? 'login' : 'signup';
    return <AuthForm
            login={this.props.login}
            signup={this.props.signup}
            errors={this.props.errors}
            closeModal={this.closeModal}
            authType={type} />;
  }

  render() {
    if (this.props.episodes.length === 0) return null;
    const episodes = this.props.episodes.map( episode => {
      return <EpisodeIndexItemContainer
        episode={episode}
        key={episode.id}
        currentEp={this.props.currentEp}
        receiveCurrentEp={this.props.receiveCurrentEp}/>;
    });
    return (
      <div className="landing-page">
        <div className="banner">
          <button onClick={this.openModal}>Create Account</button>
          <button onClick={this.openModal}>Sign In</button>
          <button onClick={this.handleGuest}>Guest</button>
          <img src='https://a-v2.sndcdn.com/assets/images/sc-icons/win8-2dc974a1.png'></img>
          <p>PODCLOUD</p>
        </div>
        <div className="banner-text">
          <h1>Connect on PodCloud</h1>
          <p>Discover, stream, and share a constantly expanding mix of podcasts</p>
          <p>from emerging and major content creators around the world.</p>
        </div>
        <div className='body'>
          <div className='track-container'>
            <div className='tabs' id='latest'>Latest Episodes</div>
            <ul className='episode-bucket'>{episodes}</ul>
          </div>
        </div>
        <div className='banner-2'>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal"
          >
          {this.renderAuth()}
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
