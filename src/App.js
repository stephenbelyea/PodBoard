import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './views/Layout';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='/login' component={Login} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
