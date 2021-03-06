import React, { useState, useEffect } from 'react'

import { pages } from '../data/pages'
import './styles.css'

const SidePanel = ({ changePage }) => {
  const [panel, setPanel] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = e => {
    if (e.key === 'M' || e.key === 'm'){
      setPanel(state => !state)
    }
  }

  const handleClick = (index) => {
    changePage(index)
    setPanel(false)
  }

  const renderButtons = (btnArr) => {
    return btnArr.map((btn, index) => (
      <li key={index}>
        <span onClick={() => handleClick(index)}>
          <i className={`fas ${btn.icon}`}></i>
          {btn.name}
        </span>
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

export default SidePanel
