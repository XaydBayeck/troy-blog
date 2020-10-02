import * as React from 'react'
import { MouseEvent } from 'react'
import './SidebarButton.css'

export interface Props {
  onclick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function SidebarButton(props: Props) {
  return (
    <button className="sidebar-button" onClick={props.onclick}>
      <span className="first-span-in-sidebar-button" />
      <span className="second-span-in-sidebar-button" />
      <span className="third-span-in-sidebar-button" />
    </button>
  )
}
