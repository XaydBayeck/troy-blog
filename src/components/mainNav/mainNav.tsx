import * as React from 'react'
import { Link } from 'react-router-dom'
import './manNav.css'

/* TODO: add selected transition on link  <03-10-20, David Chen> */
export default function MainNav() {
  return (
    <div className="mainNav">
      <nav className="navInMainNav">
        <Link to="/home" className="navLink navHome">
          <i className="nav-icon fa fa-home"></i>
          <div className="navName">Home</div>
          <span className="hoverLine" />
        </Link>
        <Link to="/category" className="navLink category">
          <i className="nav-icon fa fa-layer-group"></i>
          <div className="navName">Category</div>
          <span className="hoverLine" />
        </Link>
        <Link to="/about" className="navLink about">
          <i className="nav-icon fa fa-male"></i>
          <div className="navName">About</div>
          <span className="hoverLine" />
        </Link>
        <Link to="/archive" className="navLink archive">
          <i className="nav-icon fa fa-database"></i>
          <div className="navName">Archive</div>
          <span className="hoverLine" />
        </Link>
        <Link to="/tag" className="navLink tag">
          <i className="nav-icon fa fa-tag"></i>
          <div className="navName">Tag</div>
          <span className="hoverLine" />
        </Link>
      </nav>
    </div>
  )
}
