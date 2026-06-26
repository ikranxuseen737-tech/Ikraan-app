import { useState } from 'react'
import './App.css'
import Header from './Components/Header' // Ku dar qaybtii Header-ka ee aan soo samaynay
import Greeting from './Components/Greeting'
import Eventhandling from './Components/Eventhandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greeting  name="ikraan" surname="hussein" />
      <Header />
      <Header />
      
      {/* Halkan ayay ku soo baxaysaa qaybta cusub */}
       <Eventhandling/>
      
    </>
  )
}

export default App
