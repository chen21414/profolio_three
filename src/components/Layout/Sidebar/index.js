import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../../assets/images/logo-s.png";
import LogoSubtitle from "../../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

// The NavLink is used when you want to highlight a link as active. So, on every routing to a page,
// the link is highlighted according to the activeClassName.
// Link is for links that need no highlighting. And a is for external links.
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mike-chen-865304a7/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/chen21414?tab=repositories"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCBVuON6FsYVbNE_4dAUHt3g/videos"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
      {/* <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mike-chen-865304a7/"
        >
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li> */}
    </ul>
  </div>
);

export default Sidebar;
