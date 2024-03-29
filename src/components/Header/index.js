// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="header-image"
      />
      <h1 className="heading">Wave</h1>
    </div>

    <ul className="nav-items">
      <li className="list-items">
        <Link className="nav-list" to="/">
          Home
        </Link>
      </li>
      <li className="list-items">
        <Link className="nav-list" to="/about">
          About
        </Link>
      </li>
      <li className="list-items">
        <Link className="nav-list" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
