import React, { useState } from 'react'
import ImageSlider from './PageComponets/ImageSlider'
import { Grow, Button, Typography } from '@material-ui/core'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  typography: {
    color: grey[100],
  },
}))

const Projects = () => {
  const [show, setShow] = useState(true)

  const TIME = 1500
  const classes = useStyles()
  return (
    <div className="projects">
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME } : {})}
      >
        <h2>Projects</h2>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 500 } : {})}
      >
        <div className="projects-slider">
          <ImageSlider />
        </div>
      </Grow>      
    </div>
  )
}

export default Projects
