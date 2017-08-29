import React from 'react';
import ReactDOM from 'react-dom';
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
    this.remountCount = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentEp !== nextProps.currentEp) {
      if (this.audioComponent) {
        ReactDOM.findDOMNode(this.audioComponent)
          .dispatchEvent(new Event('audio-pause'));
      }
      this.remountCount = (this.remountCount + 1) % 5;
    }
  }

  render() {
    if (!this.props.currentEp) return null;
    return (
        <Audio
          key={this.remountCount}
          style={customStyles}
          autoPlay={true}
          playlist={this.props.playlist}
          ref={audioComponent => {this.audioComponent = audioComponent;}}
        />
    );
  }
}

export default ProgressBar;
