import React from 'react';
import myLogo from '../M.png';
// fontawesome icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="M logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} className="hamburger-btn"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Présentation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Compétences</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    )
}

export default Navbar
