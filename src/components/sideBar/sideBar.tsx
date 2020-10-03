import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import './sideBar.css'
import FloatButtonGroup from '../floatButtonGroup/floatButtonGroup'
import Showcase from '../showcase/showcase'

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
    return (
      <div>
        <CSSTransition
          in={this.state.isSideBarOpen}
          classNames="sideBar"
          timeout={1000}
        >
          <div className="sideBar">
            <Showcase
              headshot="/gundam.jpg"
              userName="Sid"
              description="I'm gitman!"
            />
          </div>
        </CSSTransition>
        <FloatButtonGroup
          isSideBarOpen={this.state.isSideBarOpen}
          onclick={this.changeOpenState.bind(this)}
        />
      </div>
    )
  }
}
