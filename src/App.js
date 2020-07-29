import React, { useState } from 'react'
import SidePanel from './components/SidePanel'
import Background from './components/Background'

function App() {
  const [page, setPage] = useState(0)
  const newPage = num => {
    setPage(num)
  }
  return (
    <div>      
      <SidePanel newPage={newPage} />
      <Background page={page}/>
    </div>
  )
}

export default App
