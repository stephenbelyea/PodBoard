import React from 'react';

class PostItem extends React.Component {
  render(props) {
    const { post, index } = this.props;
    let approveText = (post.approve)? "Approved!" : "Approve";
    let approveClass = (post.approve)? "btn-link small" : "btn-success small";
    let editText = (post.editing)? "Save" : "Edit";
    let editClass = (post.editing)? "btn-info small" : "btn-primary small";
    return (
      <li className="post-item" data-index={index}>
        <p className="date">{post.type} | {post.date}</p>
        <p className="text" aria-hidden={post.editing}>{post.text}</p>
        <p className="text-edit" aria-hidden={!post.editing}>
          <input type="text" 
                 value={post.text} 
                 onChange={(e) => this.props.handleTextEdit(e, index)}
                 disabled={!post.editing} />
        </p>
        <p className="actions">
          <button className={editClass}
                  onClick={() => {this.props.handleEdit(index)}}>
            {editText}
          </button>
          <button className={approveClass} 
                  onClick={() => {this.props.handleApprove(index)}}
                  disabled={post.approve}>
            {approveText}
          </button>
        </p>
      </li>
    )
  }
}

export default PostItem;