import React from 'react';
import NavBarContainer from './nav_bar_container';
import CommentIndexItemContainer from './comment_index_item_container';

class EpisodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment({
      comment: {
        body: this.state.body,
        user_id: this.props.user.id,
        episode_id: this.props.episode.id,
        image_url: this.props.user.avatar,
      }
    });
    this.setState({body: ''});
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.requestSingleEpisode(id);
  }
  render() {
    if (!this.props.episode) return null;
    const comments = this.props.comments.map( comment => {
      return <CommentIndexItemContainer
                key={comment.id}
                comment={comment}/>;
    });
    return(
      <div>
        <NavBarContainer/>
        <div className="episode-banner-wrapper">
          <div className='episode-image-container'>
            <img src="https://s3.amazonaws.com/podcloud-dev/ezgif.com-crop.gif" className='episode-banner'/>
            <img src={this.props.episode.imageUrl} className='episode-logo'/>
          </div>
        </div>
        <div className='body'>
          <div className='track-container'>
            <form onSubmit={this.handleSubmit}>
              <input type='text'
                value={this.state.body}
                onChange={this.handleChange}
                placeholder='Leave a comment...'
                className='comment-input'/>
            </form>
            <ul>{comments}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default EpisodePage;
