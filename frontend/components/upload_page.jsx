import React from 'react';
import NavBarContainer from './nav_bar_container';
import {Redirect} from 'react-router-dom';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchTerm: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let podcast;
    $.ajax({
      method: 'GET',
      url: "https://itunes.apple.com/search?" + $.param({
        country: 'us',
        media: 'podcast',
        entity: 'podcast',
        attribute: 'titleTerm',
        term: `${this.state.searchTerm}`,
      }),
    }).then(null, (response) => {
      podcast = JSON.parse(response.responseText).results[0];
      this.props.addPodcast(podcast);
      this.props.history.push(`/podcasts/${podcast.collectionId}`);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please enter the exact title of your podcast
            <input onChange={this.handleChange} type='text'/>
          </label>
        </form>
      </div>
    );
  }
}

export default UploadPage;
