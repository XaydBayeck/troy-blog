import React from 'react'
import './App.css'
import SidebarButton from './components/buttons/SidebarButton'
import RoundeButton from './components/buttons/RoundeButton'

function App() {
  return (
    <div className="App">
			<RoundeButton text="Bili Hub" href="https://www.bilibili.com" />
			<SidebarButton onclick={()=>{console.log("open side bar")}} />
    </div>
  )
}

export default App
