import React from 'react'
import './RoundeButton.css'

export interface Props {
  text: string
  href: string
}

export default function RoundeButton(props: Props) {
  return (
    <a
      className="rounde-button"
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.text}
    </a>
  )
}
