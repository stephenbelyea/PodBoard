import React from 'react';

import PostItem from './PostItem';

class PostList extends React.Component {

  buildPostList(posts) {
    if ( posts.length > 0 ) {
      return posts.map( (post, index) => (
        <PostItem key={index} 
                  index={index} 
                  post={post} 
                  handleApprove={this.props.handleApprove} 
                  handleEdit={this.props.handleEdit} 
                  handleTextEdit={this.props.handleTextEdit} />
      ));
    }
    else return [];
  }

  render() {
    let postItems = this.buildPostList(this.props.posts);
    return (
      <ul className="post-list">
        {postItems}
      </ul>
    )
  }
}

export default PostList;