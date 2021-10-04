import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand dropdown-legacy navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">Welcome</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link className="nav-link" to="/sign_up"><i className="fas fa-circle"></i> Sign Up</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/login"><i className="fas fa-circle"></i> Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
