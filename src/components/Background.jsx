import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = (state, ownProps) => {
  return {
    page: state.page,
  }
}

export default connect(mapStateToProps)(Background)
