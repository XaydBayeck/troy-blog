import * as React from 'react'
import './toTopButton.css'

export default function ToTopButton() {
  /* TODO: when press this button, make user back to the top of this page  <02-10-20, David Chen> */

  let toPageTop = () => {
    console.log("to page's top")
  }

  return (
    <button className="to-top-button" onClick={toPageTop}>
      <div className="roll">
        <span className="to-top-text">TOP</span>
        <span className="to-top-symbol">>></span>
      </div>
    </button>
  )
}
