import React from 'react';

class PostItem extends React.Component {
  render(props) {
    const { handlers, post, index } = this.props;
    let approveText = (post.approve)? "Approved!" : "Approve";
    let approveClass = (post.approve)? "btn-link small" : "btn-success small";
    let editText = (post.editing)? "Save" : "Edit";
    let editClass = (post.editing)? "btn-info small" : "btn-primary small";
    return (
      <li className="post-item" data-index={index}>
        <p className="date"><strong>{post.type}</strong> {post.date}</p>
        <p className="text" aria-hidden={post.editing}>{post.text}</p>
        <p className="text-edit" aria-hidden={!post.editing}>
          <input type="text" 
                 value={post.text} 
                 onChange={(e) => handlers[2](e, index)}
                 disabled={!post.editing} />
        </p>
        <p className="actions">
          <button className={editClass}
                  onClick={() => handlers[1](index)}>
            {editText}
          </button>
          <button className={approveClass} 
                  onClick={() => handlers[0](index)}
                  disabled={post.approve}>
            {approveText}
          </button>
        </p>
      </li>
    )
  }
}

export default PostItem;