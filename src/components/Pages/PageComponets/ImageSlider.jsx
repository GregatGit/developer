import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { MobileStepper, Paper, Typography, Button,  } from '@material-ui/core/'
import { grey } from '@material-ui/core/colors'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Pause from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { projectData } from '../../../data/data'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
 
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    borderRadius: '4px 4px 0 0',
    //backgroundColor: theme.palette.background.default,
    backgroundColor: 'transparent',
    color: '#fff'
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  typography: {
    color: grey[100],
    margin: '15px'
  },
}))

function SwipeableTextMobileStepper() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = projectData.length
  const [pause, setPause] = useState(true)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{projectData[activeStep].title}</Typography>
        <Button onClick={()=> setPause(state => !state)}>{pause ? <Pause style={{ color: grey[100] }} /> : <PlayArrowIcon style={{ color: grey[100] }} />}</Button>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={3000}
        autoplay={pause}
      >
        {projectData.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.img}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <span>
      <Button onClick={() => window.open(projectData[activeStep].code, "_blank")} variant="outlined" className={classes.button}>
        <ControlPointIcon color="primary" />
        <Typography className={classes.typography}>Open code</Typography>
      </Button>
      <Button onClick={() => window.open(projectData[activeStep].url, "_blank")}>
        <Typography className={classes.typography}>Open project</Typography>

        <ControlPointIcon color="primary" />
      </Button>
      </span>
    </div>
  )
}

export default SwipeableTextMobileStepper
