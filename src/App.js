import React, { useState } from 'react'
import SidePanel from './components/SidePanel'
import Background from './components/Background'

function App() {
  const [page, setPage] = useState(0)
  const changePage = num => {
    setPage(num)
  }
  return (
    <div>      
      <SidePanel changePage={changePage} />
      <Background page={page}/>
    </div>
  )
}

export default App
