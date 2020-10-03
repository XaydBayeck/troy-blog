import React from 'react'
import './App.css'
import SideBar from './components/sideBar/sideBar'
import MainNav from './components/mainNav/mainNav'

export interface Props {
  children: JSX.Element
}

function App(props: Props) {
  return (
    <div className="App">
      <div className="left">
        <div className="head">
          <div className="title">
            <i className="icon fa fa-rocket" />
            Sid's Blog
          </div>
          <MainNav />
        </div>
        {props.children}
      </div>
      <div className="right">
        <SideBar />
      </div>
    </div>
  )
}

export default App
