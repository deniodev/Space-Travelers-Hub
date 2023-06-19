import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/planet.png';
import './header.css';

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-content">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <p>Space Traveler&apos;s Hub</p>
    </div>
    <ul className="nav-link">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="mission">Missions</NavLink>
      <NavLink to="profile">My profile</NavLink>
    </ul>
  </nav>
);

export default Header;
