import React from 'react';
import { Link } from 'react-router-dom';

class PodcastIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {podcast} = this.props;
    return(
      <li className='pod-container'>
        <Link to={`/podcasts/${podcast.id}`} className='user-pod-img'>
          <img src={podcast.logoUrl}/>
        </Link>
        <Link to={`/podcasts/${podcast.id}`} className='user-pod-title'>
          {podcast.title}
        </Link>
      </li>
    );
  }
}

export default PodcastIndexItem;
