import React from 'react'
import {ReactComponent as ReactLogo} from '../../img/logo-react.svg'
import {ReactComponent as ReduxLogo} from '../../img/logo-redux.svg'
import {ReactComponent as JSLogo} from '../../img/logo-javascript.svg'
import {ReactComponent as CssLogo} from '../../img/logo-css.svg'
import {ReactComponent as FirebaseLogo} from '../../img/logo-firebase.svg'


const Welcome = () => {
  return (
    <div className="welcome">
      <h2>Welcome</h2>
      <p>I am Greg Duncan, a web developer building apps with modern technologies. My main focus has been utilising React with Redux with Firebase as a back end but I have used Vue and Vanilla.js to build apps. </p>
    <div className="welcomeLogo">
      <span><JSLogo /></span>
      <span><ReactLogo width="100" height="100"/></span>
      <span><FirebaseLogo width="100" height="100"/></span>
      <span><ReduxLogo width="100" height="100"/></span>
      <span><CssLogo width="100" height="100"/></span>
    </div>

    </div>
  )
}

export default Welcome
