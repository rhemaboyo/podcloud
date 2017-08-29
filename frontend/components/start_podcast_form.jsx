import React from 'react';

class StartPodcastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      part: 1,
    };
  }

  handleUpload(e) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    if (file) formData.append(`podcast[original_logo]`, file);
    formData.append('podcast[title]', e.currentTarget.value);
    this.props.addOriginalPodcast(this.props.user.id, formData);
  }

  render() {
    return(
      <div>
        <from onSubmit={this.handleUpload}>
          <h1>We're excited that you want to start your Podcast journey with us!</h1>
          <h2>Step 1:</h2>
          <h3>What will the title be?</h3>
          <input type='text'/>
          <h2>Step 2:</h2>
          <h3>Please Enter a Logo image for your Podcast</h3>
          <label htmlFor='logo-upload'>
            Choose a file to upload
            <input type='file' id='logo-upload' onClick={this.handleClick}/>
          </label>
        </from>
      </div>
    );
  }
}

export default StartPodcastForm;
