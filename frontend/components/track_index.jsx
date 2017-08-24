import React from 'react';
import NavBar from './nav_bar';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar user={this.props.user} logout={this.props.logout}/>
      </div>
    );
  }
}

export default TrackIndex;
