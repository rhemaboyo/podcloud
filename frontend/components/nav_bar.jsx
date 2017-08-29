import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import StartPodcastForm from './start_podcast_form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
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
    return(
      <div>
        <div className='nav-container'>
          <nav className='nav'>
            <button onClick={this.logout}>Sign Out</button>
            <Link to={`/${this.props.user.username}`}>
              {this.props.user.username}
            </Link>
            <button onClick={this.openModal}>Upload</button>
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
          <StartPodcastForm />
        </Modal>
      </div>
    );
  }
}

export default NavBar;
