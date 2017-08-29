import React from 'react';
import NavBarContainer from './nav_bar_container';

class PodcastPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    if (!this.props.podcast) {
      if (id[0] === 'o') {
        this.props.requestSinglePodcast(id.slice(9));
      } else {
        this.props.requestSinglePodcast(id);
      }
    }
  }

  handleClick() {
    this.audio.play();
  }


  render() {
    if (!this.props.podcast) return null;
    return (
      <div className='podcast-container'>
        <NavBarContainer/>
      </div>
    );
  }
}

export default PodcastPage;
