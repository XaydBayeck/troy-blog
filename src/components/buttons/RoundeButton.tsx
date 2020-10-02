import React from 'react'
import './RoundeButton.css'

export interface Props {
  text: string
  onclick: (event: any, params: number | null) => void
  onclickParams: number | null
}

export default function RoundeButton(props: Props) {
  return (
    <button
      className='rounde-button '
      onClick={e => props.onclick(e, props.onclickParams)}
    >
      {props.text}
    </button>
  )
}
