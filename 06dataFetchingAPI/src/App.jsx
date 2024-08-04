import { useState } from 'react'
import './App.css'
import DataFetchingComponent from './components/DataFetchingComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataFetchingComponent />
    </>
  )
}

export default App
