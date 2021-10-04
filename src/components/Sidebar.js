import React from "react"
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div className="os-content" style={{"padding": "0px 8px", "height": "100%", "width": "100%"}}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="pl-0 brand-link">
          <img src="/logo192.png" alt="Luler Tangga Logo" className="brand-image img-circle elevation-3" />
          <span className="brand-text font-weight-light">LULER TANGGA ONLINE</span>
        </Link>

        <nav className="mt-3">
          <ul className="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item"><Link to="/home" className="nav-link"><i className="nav-icon fa fa-circle"></i> Home</Link></li>
            <li className="nav-item"><Link to="/room_list" className="nav-link"><i className="nav-icon fa fa-circle"></i> Room List</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
