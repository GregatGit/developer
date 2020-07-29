import React from 'react'

import Welcome from './Pages/Welcome'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'

const Background = ({ page }) => {
  return (
    <div id="main">
      {page === 0 && <Welcome />}
      {page === 1 && <Skills />}
      {page === 2 && <Projects />}
      {page === 3 && <About />}
      {page === 4 && <Contact />}
    </div>
  )
}

export default Background
