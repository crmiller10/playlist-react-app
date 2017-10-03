import React, { Component } from 'react';

class Navbar extends Component{

  render(){
    return(
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-info">
        <div className="container">
          <a href="/" className="navbar-brand">PlayList</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse justify-content-stretch" id="navbar6">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Link Item</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link Item</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;