import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import './sideBar.css'
import FloatButtonGroup from '../floatButtonGroup/floatButtonGroup'

export default class SideBar extends React.Component {
  state = {
    isSideBarOpen: false,
  }

  changeOpenState = () => {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen,
    })
    console.log('is sidebar open? ' + this.state.isSideBarOpen)
  }

  render() {
    let barStateClass

    if (this.state.isSideBarOpen) {
      barStateClass = 'opened'
    } else {
      barStateClass = 'closed'
    }

    return (
      <div>
				<CSSTransition in={this.state.isSideBarOpen}
					classNames="sideBar"
					timeout={1000}
				>
          <div className="sideBar"></div>
        </CSSTransition>
        <FloatButtonGroup onclick={this.changeOpenState.bind(this)} />
      </div>
    )
  }
}
