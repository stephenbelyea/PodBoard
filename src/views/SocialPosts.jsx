import React from 'react';

class SocialPosts extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render () {
    return (
      <article className="social-posts">
        <h1>Social Posts</h1>
        <ul>
          <li>
            <p className="date">Twitter | 9:30 AM - 1 Feb 2017</p>
            <p className="text">Like out theme song? Check out more by Valery & The Greedies: https://valerythegreedies.bandcamp.com/</p>
            <p className="type">
              <button className="btn-primary small">Edit</button>
              <button className="btn-success small">Approve</button>
            </p>
          </li>
          <li>
            <p className="date">Twitter | 9:21 AM - 31 Jan 2017</p>
            <p className="text">Groundhog Day is just around the corner! We thought it'd be fitting to #dustoff the film. #NewEpisode Friday!</p>
            <p className="type"></p>
          </li>
          <li>
            <p className="date">Twitter | 8:55 AM - 30 Jan 2017</p>
            <p className="text">"He looks young. Well, younger than he is now." Find out who on Friday. #thedustoff</p>
            <p className="type"></p>
          </li>
        </ul>
      </article>
    )
  }
}

export default SocialPosts;