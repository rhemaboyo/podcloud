import React from 'react';

class UploadEpisodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
      file: null,
    };
    this.setField = this.setField.bind(this);
    this.setFile = this.setFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.file) {
      formData.append('episode[original_audio]', this.state.file);
    }
    let date = new Date;
    formData.append('episode[title]', this.state.title);
    formData.append('episode[summary]', this.state.summary);
    formData.append('episode[pub_date]', date.toString());
    formData.append('episode[podcast_id]', this.props.podcast.id);
    formData.append('episode[image_url]', this.props.podcast.logoUrl);
    debugger;
    this.props.addOriginalEpisode(formData);
  }

  setField(e, field) {
    this.setState({ [field]: e.currentTarget.value });
  }

  setFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({file: file});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleUpload}>
          <h3>What is the title of this episode?</h3>
          <input type='text' onChange={(e) => this.setField(e, 'title')}/>
          <h3>Please give us a short summary</h3>
          <input type='text' onChange={(e) => this.setField(e, 'summary')}/>
          <label htmlFor='episode-upload'>
            Choose a file to upload
            <input type='file' id='episode-upload' onChange={this.setFile}/>
          </label>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

export default UploadEpisodeForm;
