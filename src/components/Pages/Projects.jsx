import React, { useState } from 'react'
import ImageSlider from './PageComponets/ImageSlider'
import { Grow } from '@material-ui/core'

const Projects = () => {
  const [show] = useState(true)

  const TIME = 1500
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
