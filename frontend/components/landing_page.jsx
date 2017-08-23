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
  constructor() {
    super();

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
      return <LoginForm openModal={this.openModal} />;
    } else {
      return <SignUpForm openModal={this.openModal} />;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Sign In</button>
        <button onClick={this.openModal}>Create Account</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          {this.releventForm()}
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
