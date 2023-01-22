import React from 'react'
import PropTypes from 'prop-types'
// import Darkmode from './Darkmode';
// import { useState } from "react";
// import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
//   const [myStyle,setmyStyle] = useState({
//     color:'black',
//     backgroundColor:'greys'
// })
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  {/* <Link className="navbar-brand" to="/">{props.title}</Link> code for Routing  */}
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> code for Routing */}
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> code for Routing */}
        {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
      </li>
    </ul>
    <div className="">
    <form className="form-inline mx-1 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    <div className={`form-check form-switch mx-4 my-1 text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onChange={props.toggleMode}
            id="flexSwitchCheckDefault togBtn"
          />
          <label className="form-check-label" forhtml="flexSwitchCheckDefault">Enable Dark Mode
          </label>
        </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string
};

Navbar.defaultProps = {
    title : "set title here",
    aboutText : "set about text here"
}

