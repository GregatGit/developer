import React, { useState } from 'react'
import './styles.css'

const SidePanel = () => {
  const [panel, setPanel] = useState(true)
  return (
    <div>
      <input type="checkbox" id="check" checked={panel} onChange={() => setPanel(!panel)} />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>Greg Duncan</header>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-laugh"></i>Welcome
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-code"></i>Skills
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cogs"></i>Projects
            </a>
          </li>
          
          <li>
            <a href="#">
              <i className="fas fa-info-circle"></i>About
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-envelope"></i>Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidePanel
