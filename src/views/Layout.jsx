import React from 'react';
import Nav from '../components/Nav';

class Layout extends React.Component {
  render (props) {
    return (
      <div id="wrap">
        <Nav />
        <main id="main" className="container">
          <div className="row">
            <div className="col-xs-12">
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Layout;