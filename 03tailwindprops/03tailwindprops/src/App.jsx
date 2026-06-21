import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-amber-300 text-green-700 p-4 rounded-xl '>tailwind Test</h1>
      <Card username= "Tailwind and Props" btnText = 'Click me'/>
      <Card  username = "Hrishabh" btnText = 'Visit Me'/>
    </>
  )
}

export default App
