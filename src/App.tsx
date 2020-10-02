import React from 'react'
import './App.css'
import RoundeButton from './components/buttons/RoundeButton'
import FloatButtonGroup from './components/floatButtonGroup/floatButtonGroup'

function App() {
  return (
    <div className="App">
      <RoundeButton text="Bili Hub" href="https://www.bilibili.com" />
      <FloatButtonGroup />
    </div>
  )
}

export default App
