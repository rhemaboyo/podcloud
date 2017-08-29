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
    e.preventDefault();
    const formData = new FormData();
    if (this.state.file) formData.append(`podcast[original_logo]`, this.state.file);
    formData.append('podcast[title]', this.state.title);
    formData.append('podcast[admin_id]', this.props.user.id);
    debugger;
    this.props.addOriginalPodcast(formData);
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
      <div>
        <form onSubmit={this.handleUpload}>
          <h1>We're excited that you want to start your Podcast journey with us!</h1>
          <h2>Step 1:</h2>
          <h3>What will the title be?</h3>
          <input type='text' onChange={this.setTitle}/>
          <h2>Step 2:</h2>
          <h3>Please Enter a Logo image for your Podcast</h3>
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
