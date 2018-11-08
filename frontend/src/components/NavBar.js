import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      collapsed: true,
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    const { location } = this.props;
    const homeClass = location.pathname === '/' ? 'btn navbar-brand active' : 'btn navbar-brand'
    const searchClass = location.pathname === '/search' ? 'btn active' : 'btn'
    const discoverClass = location.pathname === '/discover' ? 'btn active' : 'btn'
    const mapClass = location.pathname === '/map' ? 'btn active' : 'btn'
    const profileClass = location.pathname === '/profile' ? 'btn active' : 'btn'
    const loginClass = location.pathname === '/login' ? 'btn active' : 'btn'
    const navClass = this.state.collapsed ? "navbar-collapse collapse" : "navbar-collapse";

    return (
      <nav className="navbar navbar-expand-sm sticky-top navbar-white bg-white">
        <Link to="/" className={homeClass}>Countries</Link>
        <button className="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navClass} id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <Link onClick={this.toggleCollapse.bind(this)} className={searchClass} to="/">Search</Link>
            <Link onClick={this.toggleCollapse.bind(this)} className={discoverClass} to="/discover">Discover</Link>
            <Link onClick={this.toggleCollapse.bind(this)} className={mapClass} to="/map">My Map</Link>
            <Link onClick={this.toggleCollapse.bind(this)} className={profileClass} to="/profile">Profile</Link>
          </div>
          <div className="navbar-nav ml-auto">
            {
              !this.props.authenticated
              ? <Link onClick={this.toggleCollapse.bind(this)} className={loginClass} to="/login">Login</Link>
              : <Link onClick={(event) => { this.props.handleClick(); this.toggleCollapse.bind(this)();}} className="btn" to="/logout">Logout</Link>
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
