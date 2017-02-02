import React from 'react';

import PostItem from './PostItem';

class PostList extends React.Component {

  buildPostList(posts) {
    if ( posts.length > 0 ) {
      return posts.map( (post, index) => (
        <PostItem key={index} 
                  index={index} 
                  post={post} 
                  handlers={this.props.handlers} />
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