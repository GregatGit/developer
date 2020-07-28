import React, { useState } from 'react'
import ImageSlider from './PageComponets/ImageSlider'
import { Grow, Button } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code';

const Projects = () => {
  const [show, setShow] = useState(true)

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
      <p>This is the project page</p>
      <CodeIcon />
      <p>This is the project page</p>
      <p>This is the project page</p>
      <p>This is the project page</p>
      <p>This is the project page</p>
      <p>This is the project page</p>
      <p>This is the project page</p>
      <p>This is the project page</p>
    </div>
  )
}

export default Projects
