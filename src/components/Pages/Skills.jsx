import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Grow } from '@material-ui/core/'
import FlashingIcon from './PageComponets/FlashingIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const Skills = () => {
  const classes = useStyles()
  const [show] = useState(true)

  const TIME = 1400

  return (
    <div className="skills container">
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
        <article>
          <p>
            I build projects with React, Redux, Material-Ui and if a back end is
            needed Firebase. In the past I configured Webpack but now I take
            advantage of Create-React-App.
          </p>
          <p>
            I have built apps with Vue, Vanilla, jQuerry with Bootstrap and
            Semantic-Ui.
          </p>
          <p>
            I am a javascript developer but I first coded with with C, C# and
            python.
          </p>
          <p>
            I have a Diploma in Networking (completed 2014) that grounded me in
            network fundamentals, taught me how to configure Cisco routers and
            manage Windows Server and Active Directory.
          </p>
          <p>
            Outside the digital world I host Murder Mysteries and Trivia nights
            which has made me a confident public speaker.
          </p>
        </article>
      </Grow>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2, 3, 4].map((logo, index) => (
              <Grid key={index} item className="logo1">
                <FlashingIcon wait={logo} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills
