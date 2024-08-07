import { useState } from 'react'
import './App.css'
import ScrollTracker from './components/ScrollTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollTracker />
    </>
  )
}

export default App
