import React from 'react';

import PostList from '../components/PostList';

class SocialPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          type: 'Twitter',
          date: '1 Feb 2017',
          text: 'Like out theme song? Check out more by Valery & The Greedies: https://valerythegreedies.bandcamp.com/',
          approve: false,
          editing: false
        },
        {
          type: 'Twitter',
          date: '31 Jan 2017',
          text: 'Groundhog Day is just around the corner! We thought it\'d be fitting to #dustoff the film. #NewEpisode Friday!',
          approve: false,
          editing: false
        },
        {
          type: 'Twitter',
          date: '30 Jan 2017',
          text: '"He looks young. Well, younger than he is now." Find out who on Friday. #thedustoff',
          approve: false,
          editing: false
        }
      ]
    };
  }

  handleApprove(i) {
    let approve = !this.state.posts[i].approve;
    let posts = this.state.posts;
    posts[i].approve = approve;
    this.setState({ posts: posts });
  }

  handleEdit(i) {
    let editing = !this.state.posts[i].editing;
    let posts = this.state.posts;
    posts[i].editing = editing;
    if ( !editing ) {
      posts[i].approve = editing;
    }
    this.setState({ posts: posts });
  }

  handleTextEdit(e, i) {
    let tar = e.currentTarget;
    let posts = this.state.posts;
    posts[i].text = tar.value;
    this.setState({ posts: posts });
  }

  render () {
    const handlers = [
      this.handleApprove.bind(this),
      this.handleEdit.bind(this),
      this.handleTextEdit.bind(this)
    ];
    return (
      <article className="social-posts">
        <h1>Social Posts</h1>
        <PostList posts={this.state.posts} 
                  handlers={handlers} />
      </article>
    )
  }
}

export default SocialPosts;