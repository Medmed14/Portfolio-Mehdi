import React from 'react';
import myLogo from '../M.png';
// fontawesome icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// scroll
import { Link } from "react-scroll";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link smooth={true} to="home" className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="M logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} className="hamburger-btn" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <Link smooth={true} to="presentation" offset={-110} className="nav-link" aria-current="page" href="#">Présentation</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#">Compétences</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Expérience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
