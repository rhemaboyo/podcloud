import React from 'react';
import Audio from 'react-audioplayer';

const customStyles = {
  width: '100%',
  bottom: '0',
  backgroundColor: '#f2f2f2',
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
          ref={audioComponent => {this.audioComponent = audioComponent;}}
        />
    );
  }
}

export default ProgressBar;
