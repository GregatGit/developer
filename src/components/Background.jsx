import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import SideBar from './SidePanel'
import Welcome from './Pages/Welcome'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const Background = ({ page }) => {
  const classes = useStyles()
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
