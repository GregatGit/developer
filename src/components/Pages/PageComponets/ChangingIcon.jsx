import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, Zoom, Box } from '@material-ui/core/'
import { svgAndName } from '../../../helpers'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    width: '100%',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    maxHeight: '100px',
    maxWidth: '100px'
  },
}))

function ZoomngA() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)

  let timer
  useEffect(() => {
    timer = setInterval(() => nextValue(), 1500);

    return () => {
      clearInterval(timer)
    }
  }, [])

  const nextValue = () => {
    setValue(value => (value + 1) % (fabsA.length)
    )
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  const fabsA = svgAndName.map(({ svg, name }) => {
    return {
      color: 'default',
      icon: svg,
      label: name
    }
  })

  return (
    <div className={classes.root}>     
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
      >
        {fabsA.map((logo, index) => (
          <TabPanel key={logo.label} value={value} index={index} dir={theme.direction}>
          {logo.label.toUpperCase()}
        </TabPanel>
        ))}
        
      </SwipeableViews>
      {fabsA.map((fab, index) => (
        <Zoom
          key={index}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <span className={classes.fab}>
          {fab.icon}
          </span>      
        </Zoom>
      ))}
    </div>
  )
}

export default ZoomngA

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

