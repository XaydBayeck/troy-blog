import * as React from 'react'
import './showdcase.css'

export interface Props {
  headshot: string
  userName: string
  description: string
}

export default function Showcase(props: Props) {
  return (
    <div className="showcase">
      <img
        className="headshot"
        src={props.headshot}
        alt={props.userName}
        height="120px"
        width="120px"
      />
      <div className="userName">{props.userName}</div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  )
}
