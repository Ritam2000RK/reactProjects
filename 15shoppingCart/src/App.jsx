import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cart />
    </>
  )
}

export default App
