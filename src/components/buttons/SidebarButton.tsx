import * as React from 'react'
import { MouseEvent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './SidebarButton.css'

export interface Props {
  onclick: (event: MouseEvent<HTMLButtonElement>) => void
  isSideBarOpen: boolean
}

export default function SidebarButton(props: Props) {
  return (
    <button className="sidebar-button" onClick={props.onclick}>
      <CSSTransition in={props.isSideBarOpen} timeout={500} classNames="first">
        <span
          className={
            '' + (!props.isSideBarOpen && 'first-span-in-sidebar-button')
          }
        />
      </CSSTransition>
      <CSSTransition in={props.isSideBarOpen} timeout={500} classNames="second">
        <span
          className={
            '' + (!props.isSideBarOpen && 'second-span-in-sidebar-button')
          }
        />
      </CSSTransition>
      <CSSTransition in={props.isSideBarOpen} timeout={500} classNames="third">
        <span
          className={
            '' + (!props.isSideBarOpen && 'third-span-in-sidebar-button')
          }
        />
      </CSSTransition>
    </button>
  )
}
