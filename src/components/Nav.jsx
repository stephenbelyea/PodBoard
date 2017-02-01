import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    }
  }
  
  navbarToggle(e) {
    let btn = e.currentTarget;
    let tog = !this.state.toggle;
    this.setState({toggle: tog});
  }

  render () {
    let toggleClass = (this.state.toggle) ? 
                      'navbar-toggle' : 
                      'navbar-toggle collapsed';
    let collapseClass = (this.state.toggle) ? 
                        'collapse navbar-collapse in' : 
                        'collapse navbar-collapse';
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" 
                    className={toggleClass}
                    data-toggle="collapse" 
                    data-target="#navbar-collapse" 
                    aria-expanded={this.state.toggle}
                    onClick={this.navbarToggle.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">PodBoard</a>
          </div>
          <div className={collapseClass} id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><IndexLink to="/login" activeClassName="active">Login</IndexLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;