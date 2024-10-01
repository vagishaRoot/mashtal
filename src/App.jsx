import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Routers from './router/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers />
    </>
  )
}

export default App
