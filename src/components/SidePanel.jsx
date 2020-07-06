import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, animateScroll as scroll } from 'react-scroll'
import { changePage } from '../actions'
import './styles.css'

const SidePanel = ({ pages, changePage }) => {
  const [panel, setPanel] = useState(true)

  const renderButtons = (btnArr) => {
    return btnArr.map((btn, index) => (
      <li>
        <Link
          activeClass="active"
          to={btn.name}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => changePage(index)}
        >
          <i className={`fas ${btn.icon}`}></i>
          {btn.name}
        </Link>
      </li>
    ))
  }
  return (
    <div>
      <input
        type="checkbox"
        id="check"
        checked={panel}
        onChange={() => setPanel(!panel)}
      />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>Greg Duncan</header>
        <ul>{renderButtons(pages)}</ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
  }
}

export default connect(mapStateToProps, { changePage })(SidePanel)
