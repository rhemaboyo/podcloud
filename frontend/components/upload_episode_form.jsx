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

  handleUpload(e, form) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.file) {
      formData.append('episode[original_audio]', this.state.file);
    }
    let date = new Date;
    if (this.state.title) {
      formData.append('episode[title]', this.state.title);
    }
    if (this.state.summary) {
      formData.append('episode[summary]', this.state.summary);
    }
    if (form === 'upload') {
      formData.append('episode[pub_date]', date.toString());
      formData.append('episode[podcast_id]', this.props.podcast.id);
      formData.append('episode[image_url]', this.props.podcast.logoUrl);
      this.props.addOriginalEpisode(formData)
        .then(() => this.props.closeModal());
    } else {
      this.props.editEpisode(this.props.episodeId, formData)
        .then(() => this.props.closeModal());
    }
  }

  setField(e, field) {
    this.setState({ [field]: e.currentTarget.value });
  }

  setFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({file: file});
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <li key={i}>{error}</li>;
    });
    return(
      <div className='start-episode'>
        <form onSubmit={ e => this.handleUpload(e, this.props.form)}>
          <h3>Title of this episode:</h3>
          <input type='text' onChange={(e) => this.setField(e, 'title')}/>
          <h3>Short summary of this episode:</h3>
          <input type='text' onChange={(e) => this.setField(e, 'summary')}/>
          <label htmlFor='episode-upload'>
            Choose a file to upload
            <input type='file' id='episode-upload' onChange={this.setFile}/>
          </label>
          <input type='submit'></input>
          <ul>{errors}</ul>
        </form>
      </div>
    );
  }
}

export default UploadEpisodeForm;
