import React, { useState, useEffect } from 'react'
import SidePanel from './components/SidePanel'
import Background from './components/Background'

function App() {
  const [page, setPage] = useState(0)
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const changePage = num => {
    setPage(num)
  }

  const handleKeyDown = e => {
    let keyPressed = parseInt(e.key)
    if (keyPressed === NaN) return
    if (keyPressed > 0 && keyPressed < 6){
      changePage(keyPressed - 1)
    }
  }
  return (
    <div>      
      <SidePanel changePage={changePage} />
      <Background page={page}/>
    </div>
  )
}

export default App
