import React, { Fragment } from 'react'
import { Grow } from '@material-ui/core'
import { ReactComponent as ReactLogo } from '../../img/logo-react.svg'
import { ReactComponent as ReduxLogo } from '../../img/logo-redux.svg'
import { ReactComponent as JSLogo } from '../../img/logo-javascript.svg'
import { ReactComponent as CssLogo } from '../../img/logo-css.svg'
import { ReactComponent as FirebaseLogo } from '../../img/logo-firebase.svg'

const Welcome = () => {
  const TIME = 1500
  return (
    <div className="welcome">
      <Fragment>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: TIME } : {})}
        >
          <h2>Welcome</h2>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: TIME + 1000 } : {})}
        >
          <p>
            I am Greg Duncan, a web developer building apps with modern
            technologies. My main focus has been utilising React with Redux. Materail-UI and CSS for styling and
            Firebase as a back end. I also use Vue and Vanilla.js to build
            apps.
          </p>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: TIME + 2500 } : {})}
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
              <CssLogo />
            </span>
          </div>
        </Grow>
      </Fragment>
    </div>
  )
}

export default Welcome
