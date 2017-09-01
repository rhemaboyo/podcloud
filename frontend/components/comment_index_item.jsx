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
      deleteButton = <button className='delete'onClick={this.handleDelete}>delete</button>;
    }
    return(
      <li className='comment-items'>
        <img className='comment-image'
             src={this.props.comment.imageUrl}>
        </img>
        <div className='comment-info'>
          <p className='comment-username'>{this.props.comment.username}</p>
          <p className='comment-body'>{this.props.comment.body}</p>
        </div>
        {deleteButton}
      </li>
    );
  }
}

export default CommentIndexItem;
