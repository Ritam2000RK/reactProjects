import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App