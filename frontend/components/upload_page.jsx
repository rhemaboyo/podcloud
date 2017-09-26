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
    let self = this;
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
      this.props.addPodcast(podcast).then( res => {
        self.props.history.push(`/podcasts/${res.payload.podcast.id}`);
        self.props.closeModal();
      });
    });
  }

  render() {
    return (
      <div className='upload-form'>
        <form onSubmit={this.handleSubmit}>
          <p>
            Please enter the exact title of the podcast
          </p>
          <input onChange={this.handleChange}
                 placeholder='Type here...'
                 type='text'/>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default UploadPage;
