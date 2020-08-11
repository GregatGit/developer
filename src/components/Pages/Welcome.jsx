import React, { useState, useEffect, Fragment } from 'react'
import { Grow } from '@material-ui/core'
import { ReactComponent as ReactLogo } from '../../img/logo-react.svg'
import { ReactComponent as ReduxLogo } from '../../img/logo-redux.svg'
import { ReactComponent as JSLogo } from '../../img/logo-javascript.svg'
import { ReactComponent as FirebaseLogo } from '../../img/logo-firebase.svg'
import { ReactComponent as NodeLogo } from '../../img/logo-node.svg'

const Welcome = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 300)
  }, [])
  const TIME = 1500
  return (
    <div className="welcome">
      <Fragment>
        <Grow
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: TIME } : {})}
        >
          <h2>Welcome</h2>
        </Grow>
        <Grow
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: TIME + 1000 } : {})}
        >
          <p>
            I am Greg Duncan, a web developer building apps with modern
            technologies. Please look around and check out my old and new projects.
          </p>
        </Grow>
        <Grow
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: TIME + 1000 } : {})}
        >
          
          <p>
            Click the top left menu
            button show the side panel.
          </p>
        </Grow>
        <Grow
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: TIME + 1000 } : {})}
        >
        <p>Press 'M' to toggle the side panel.</p>
        </Grow>
        <Grow
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: TIME + 1000 } : {})}
        >
          
          <p>
            1 to 5 will change pages.
          </p>
        </Grow>
        <Grow
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: TIME + 2500 } : {})}
        >
          <div className="welcomeLogo">
            <span>
              <JSLogo />
            </span>
            <span>
              <ReactLogo />
            </span>
            <span>
              <FirebaseLogo />
            </span>
            <span>
              <ReduxLogo />
            </span>
            <span>
              <NodeLogo />
            </span>
          </div>
        </Grow>
      </Fragment>
    </div>
  )
}

export default Welcome
