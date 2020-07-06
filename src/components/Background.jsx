import React from 'react'
import { connect } from 'react-redux'

import Pages from './Pages'
import Welcome from './Pages/Welcome'

const Background = ({ page }) => {
  return (
    <div>
      <div id="main">
        {page === 0 && <Welcome /> }
        <Pages />
      </div>
      
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(Background)
