import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import StartPodcastFormContainer from './start_podcast_form';
import UploadPageContainer from './upload_page_container';

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

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      form: null
    };
    this.logout = this.logout.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e, form) {
    this.setState({
      modalIsOpen: true,
      form: form
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.removeErrors();
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  showUser() {

  }

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    {/*may want to refactor all clicks into one function later*/}
    const form1 = <StartPodcastFormContainer/>;
    const form2 = <UploadPageContainer/>;
    return(
      <div>
        <div className='nav-container'>
          <nav className='nav'>
            <button onClick={this.logout}>Sign Out</button>
            <Link to={`/${this.props.user.username}`}>
              {this.props.user.username}
            </Link>
            <button onClick={e => this.openModal(e, form1)}>Start Your own Podcast!</button>
            <button onClick={e => this.openModal(e, form2)}>Add your favorite Podcast!</button>
            <img src='https://a-v2.sndcdn.com/assets/images/sc-icons/win8-2dc974a1.png'></img>
            <Link to={`/stream`}>Home</Link>
            <input onSubmit={this.preventDefault}
              placeholder='Search...'
              value=''/>
          </nav>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal"
          >
          {this.state.form}
        </Modal>
      </div>
    );
  }
}

export default NavBar;
