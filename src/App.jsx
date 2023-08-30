import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Central from './Components/Central.jsx'
import Profiles from './Components/Profiles.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Central />
    <Profiles />
    </>
  )
}

export default App
