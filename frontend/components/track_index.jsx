import React from 'react';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        {this.props.user.username}
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}

export default TrackIndex;
