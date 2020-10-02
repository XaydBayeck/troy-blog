import * as React from 'react'
import { MouseEvent } from 'react'
import './floatButtonGroup.css'
import SidebarButton from '../buttons/SidebarButton'
import ToTopButton from '../buttons/toTopButton'

export interface Props{
	onclick: (event:MouseEvent<HTMLButtonElement>)=>void
}

export default function FloatButtonGroup(props:Props) {
    return (
      <div className="float-button-group">
        <SidebarButton onclick={props.onclick} />
        <ToTopButton />
      </div>
    )
}
