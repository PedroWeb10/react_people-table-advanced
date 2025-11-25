import classN from 'classnames';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classN('navbar-item', { 'has-background-grey-lighter': isActive });

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to={{
              pathname: '/people',
              search: location.pathname === '/people' ? location.search : '',
            }}
            className={getLinkClass}
          >
            Home
          </NavLink>

          <NavLink to={'/people'} className={getLinkClass}>
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
