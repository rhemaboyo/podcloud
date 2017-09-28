import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import StartPodcastFormContainer from './start_podcast_form_container';
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
      form: null,
      searchTerm: '',
    };
    this.logout = this.logout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
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

  handleChange(e) {
    this.setState({searchTerm: e.currentTarget.value});
  }

  search(e) {
    e.preventDefault();
    this.props.getSearchResults(this.state.searchTerm).then( res => {
      console.log(res);
    });
  }

  render() {
    const form1 = <StartPodcastFormContainer closeModal={this.closeModal}/>;
    const form2 = <UploadPageContainer closeModal={this.closeModal}/>;
    return(
      <div>
        <div className='nav-container'>
          <nav className='nav'>
            <button onClick={this.logout}
                    className='nav-right'>Sign Out</button>
            <Link to={`/${this.props.user.username}`} className='nav-right'>
              {this.props.user.username}
            </Link>
            <button onClick={e => this.openModal(e, form1)}
                    className='nav-right'>
              Start Your own Podcast!</button>
            <img src=
              'https://a-v2.sndcdn.com/assets/images/sc-icons/win8-2dc974a1.png'
            className='nav-left'></img>
          <Link to={`/stream`} className='nav-left'>Home</Link>
          <button onClick={e => this.openModal(e, form2)} className='nav-left'>
            Add your favorite Podcast!</button>
          <form onSubmit={this.search}>
            <input onChange={this.handleChange}
                   className='searchbar'
                   placeholder='Search...'
                   type='text'/>
          </form>
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
