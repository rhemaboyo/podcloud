import React from 'react';

class StartPodcastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      file: null,
    };
    this.setTitle = this.setTitle.bind(this);
    this.setFile = this.setFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    const self = this;
    e.preventDefault();
    const formData = new FormData();
    if (this.state.file) formData.append(`podcast[original_logo]`, this.state.file);
    formData.append('podcast[title]', this.state.title);
    formData.append('podcast[admin_id]', this.props.user.id);
    this.props.addOriginalPodcast(formData)
      .then((res) => {
        self.props.history.push(`/podcasts/${res.payload.podcast.id}`);
        self.props.closeModal();
      });
  }

  setTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  setFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({file: file});
  }

  render() {
    return(
      <div className='start-form'>
        <form onSubmit={this.handleUpload}>
          <h1>We're Excited That you Want to Start your Podcast Journey With Us!</h1>
          <h2>What Will the Title Be?</h2>
          <input className='start-title' type='text' onChange={this.setTitle}/>
          <h3>Please Enter a Logo Image for your Podcast</h3>
          <label htmlFor='logo-upload'>
            Choose a file to upload
            <input type='file' id='logo-upload' onChange={this.setFile}/>
          </label>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default StartPodcastForm;
