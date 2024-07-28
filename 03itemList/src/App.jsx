import { useState } from 'react'
import './App.css'
import ListItem from './components/ListItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListItem />
    </>
  )
}

export default App
