import React from 'react';
import Modal from 'react-modal';
import LoginForm from './login_form';
import SignUpForm from './sign_up_form';

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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      buttonText: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({
      modalIsOpen: true,
      buttonText: e.currentTarget.innerHTML
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  releventForm() {
    if (this.state.buttonText === 'Sign In') {
      return <LoginForm
              login={this.props.login}
              errors={this.props.errors} />;
    } else {
      return <SignUpForm
              signup={this.props.signup}
              errors={this.props.errors}/>;
    }
  }

  render() {
    return (
      <div className="landing-page">
        <div className="banner">
          <button onClick={this.openModal}>Create Account</button>
          <button onClick={this.openModal}>Sign In</button>
          <img src='https://a-v2.sndcdn.com/assets/images/sc-icons/win8-2dc974a1.png'></img>
          <p>PODCLOUD</p>
        </div>
        <div className="banner-text">
          <h1>Connect on PodCloud</h1>
          <p>Discover, stream, and share a constantly expanding mix of podcasts</p>
          <p>from emerging and major content creators around the world.</p>
        </div>
        <div className='trending'>
          <p>Tracks Coming Soon... Keep Your Head In the Clouds.</p> { /*with these tracks */}
        </div>
        <div className='banner-2'>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal"
          >
          {this.releventForm()}
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
