import React, { useState, useEffect, useRef } from 'react'
import { Zoom } from '@material-ui/core'
import { logoComponents } from '../../../helpers'

export default function FlashingIcon({ wait = 0 }) {
  const [value, setValue] = useState(wait)
  const noRepeatIndex = useRef(wait)

  let timer
  useEffect(() => {
    clearInterval(timer)
    setTimeout(() => {
      timer = setInterval(() => handleClick(), 3000)
    }, wait * 1000 + wait * 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleClick = () => {
    let tempValue
    do{
      tempValue = Math.floor(Math.random() * logoComponents.length)
    } while (tempValue == noRepeatIndex.current)
    
    setValue(tempValue)
    noRepeatIndex.current = tempValue
    // console.table({ wait, tempValue, value })
  }

  const transitionDuration = {
    enter: 400,
    exit: 10,
  }

  const fabs = logoComponents.map((icon) => ({ icon: icon }))

  return (
    <span>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          {fab.icon}
        </Zoom>
      ))}
    </span>
  )
}
