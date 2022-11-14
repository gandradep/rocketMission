import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => {
  const activeLink = 'activeLink';
  const normalLink = '';
  return (
    <nav>
      <div>
        <h1>
          <img src={logo} alt="Logo" />
          Space Traveler&apos;s Hub
        </h1>
      </div>
      <ul className="menuLinks">
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
