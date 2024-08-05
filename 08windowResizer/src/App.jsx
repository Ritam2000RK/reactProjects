import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    };

  },[])

  return (
    <>
      <h1>Current Width: {windowWidth}</h1>
    </>
  )
}

export default App
