import React from 'react';
import Audio from 'react-audioplayer';

const customStyles = {
  width: '100%',
  bottom: '0',
  backgroundColor: '#f2f2f2',
  zIndex: '9999',
  position: 'fixed',
};

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    if (!this.props.currentEp) return null;
    return (
        <Audio
          style={customStyles}
          autoPlay={true}
          playlist={this.props.playlist}
          ref={audioComponent => {this.audioComponent = audioComponent;}}
        />
    );
  }
}

export default ProgressBar;
