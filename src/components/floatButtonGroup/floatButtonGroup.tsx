import * as React from 'react'
import './floatButtonGroup.css'
import SidebarButton from '../buttons/SidebarButton'
import ToTopButton from '../buttons/toTopButton'

export default class FloatButtonGroup extends React.Component {
  state = {
    isSideBarOpen: false,
  }

  changeSideBar = () => {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen,
    })
    console.log('is sidebar open? ' + this.state.isSideBarOpen)
  }

  render() {
    return (
      <div className="float-button-group">
        <SidebarButton onclick={this.changeSideBar.bind(this)} />
        <ToTopButton />
      </div>
    )
  }
}
