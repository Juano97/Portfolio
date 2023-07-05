import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/LogoJFit.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    {/* <Link className='logo' to='/'>
        <img src={logo} alt="logo" />
    </Link> */}
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4d' />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4d' />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d' />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel="noreferrer" href='https://www.google.com'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d' />
            </a>
        </li>
        <li>
            <a target='_blank' rel="noreferrer" href='https://www.google.com'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4d' />
            </a>
        </li>
    </ul>
  </div>
)

export default Sidebar