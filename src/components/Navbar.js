import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => {
  const activeLink = 'activeLink';
  const normalLink = '';
  return (
    <nav className="dFlex justify_between w-full items-center nav">
      <div>
        <h1 className="dFlex items-center">
          <img src={logo} alt="Logo" className="logo-img" />
          Space Traveler&apos;s Hub
        </h1>
      </div>
      <ul className="menuLinks dFlex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myprofile"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
