import * as React from 'react'
import './manNav.css'

/* TODO: add selected transition on link  <03-10-20, David Chen> */
export default function MainNav() {
  return (
    <div className="mainNav">
      <nav className="navInMainNav">
        <a href="#" className="navLink navHome">
          <i className="nav-icon fa fa-home"></i>
          <div className="navName">Home</div>
          <span className="hoverLine" />
        </a>
        <a href="#" className="navLink category">
          <i className="nav-icon fa fa-layer-group"></i>
          <div className="navName">Category</div>
          <span className="hoverLine" />
        </a>
        <a href="#" className="navLink about">
          <i className="nav-icon fa fa-male"></i>
          <div className="navName">About</div>
          <span className="hoverLine" />
        </a>
        <a href="#" className="navLink archive">
          <i className="nav-icon fa fa-database"></i>
          <div className="navName">Archive</div>
          <span className="hoverLine" />
        </a>
        <a href="#" className="navLink tag">
          <i className="nav-icon fa fa-tag"></i>
          <div className="navName">Tag</div>
          <span className="hoverLine" />
        </a>
      </nav>
    </div>
  )
}
