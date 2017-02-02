import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './views/Layout';
import Login from './views/Login';
import SocialPosts from './views/SocialPosts';
import NotFound from './views/NotFound';

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Login} />
          <Route path='/social-posts' component={SocialPosts} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
