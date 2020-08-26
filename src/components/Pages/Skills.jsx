import React, { useState, Fragment } from 'react'
import { Grow, Grid } from '@material-ui/core/'
import FlashingIcon from './PageComponets/FlashingIcon'
import ChangingIcon from './PageComponets/ChangingIcon'

const Skills = () => {
  const [show] = useState(true)
  const TIME = 1400

  return (
    <div className="skills">
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME } : {})}
      >
        <h2>Skills</h2>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 400 } : {})}
      >
        <p>
          I build projects with React, Redux, Material-Ui and if a back end is
          needed Firebase. In the past I configured Webpack but now I take
          advantage of Create-React-App.
        </p>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 400 } : {})}
      >
        <p>
          I have built apps with Vue, Vanilla, jQuerry with Semantic-Ui and
           Bootstrap.
        </p>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 400 } : {})}
      >
        <p>
          I am a javascript developer but I first coded with with C, C# and
          python.
        </p>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 400 } : {})}
      >
        <p>
          I have a Diploma in Networking (completed 2014) that grounded me in
          network fundamentals, taught me how to configure Cisco routers and
          manage Windows Server and Active Directory.
        </p>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 400 } : {})}
      >
        <p>
          Outside the digital world I host Murder Mysteries and Trivia nights
          which has made me a confident public speaker.
        </p>
      </Grow>
      <ChangingIcon />
    </div>
  )
}

export default Skills
