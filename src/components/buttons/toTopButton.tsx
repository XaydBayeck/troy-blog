import * as React from 'react'
import './toTopButton.css'

export default function ToTopButton() {
  /* TODO: when press this button, make user back to the top of this page  <02-10-20, David Chen> */

  let toPageTop = () => {
		let timer = requestAnimationFrame(function fn(){
			let oTop = document.body.scrollTop || document.documentElement.scrollTop
			if (oTop>0){
				let speed = document.body.clientHeight/2000
				document.body.scrollTop = document.documentElement.scrollTop = oTop - 50 * speed
				timer = requestAnimationFrame(fn)
			}else{
				cancelAnimationFrame(timer)
			}
		})

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
