import React from 'react';

class CommentIndexItem extends React.Component {
  //try some destructuring here
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeComment(this.props.comment.id);
  }

  render() {
    let deleteButton = null;
    if (this.props.user.id === this.props.comment.userId) {
      deleteButton = <button onClick={this.handleDelete}>delete</button>;
    }
    return(
      <li>
        <img className='comment-image'
             src={this.props.comment.imageUrl}></img>
        <p>{this.props.comment.username}</p>
        <p>{this.props.comment.body}</p>
        {deleteButton}
      </li>
    );
  }
}

export default CommentIndexItem;
