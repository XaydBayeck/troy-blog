import * as React from 'react'
import { MouseEvent } from 'react'
import './toTopButton.css'

export interface Props {
  onclick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function ToTopButton(props: Props) {
  /* TODO: when press this button, make user back to the top of this page  <02-10-20, David Chen> */
  return (
    <button className="to-top-button" onClick={props.onclick}>
      <div className="roll">
        <span className="to-top-text">TOP</span>
        <span className="to-top-symbol">>></span>
      </div>
    </button>
  )
}
