import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import './sideBar.css'
import FloatButtonGroup from '../floatButtonGroup/floatButtonGroup'
import Showcase from '../showcase/showcase'
import BaseInfor from '../baseInfor/baseInfor'
import RoundeButton from '../buttons/RoundeButton'

export default class SideBar extends React.Component {
  state = {
    isSideBarOpen: false,
		baseInfor:{
			articleNum:0,
			categoryNum:0,
			tagNum:0,
		}
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
						<BaseInfor {...this.state.baseInfor} />
            <div className="main-link">
							{/* TODO: has ability to config the main link  <03-10-20, David Chen> */}
              <RoundeButton text="BiliHub" href="https://www.bilibili.com" />
            </div>
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
