import { useState } from 'react';
import { Link } from 'react-router-dom';
import { media, menuOptions } from './constants';
import { MenuHamburger } from './components/MenuHamburger';
import { StyledHeader, StyledNavLink } from './Header.styled';

export const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState('');

  const handleToggleMenu = () => {
    switch (toggleMenu) {
      case 'active':
        setToggleMenu('hide');
        break;
      case 'hide':
        setToggleMenu('active');
        break;
      default:
        setToggleMenu('active');
        break;
    }
  };

  return (
    <StyledHeader>
      <Link to="/" className="logo">
        <code>
          {`<`}
          <span>DevMaroJS</span>
          {`/>`}
        </code>
      </Link>
      <nav>
        <MenuHamburger onClick={handleToggleMenu} status={toggleMenu} />
        <div className={`menu ${toggleMenu}`}>
          <ul>
            {menuOptions.map((item, index) => (
              <li key={index}>
                <StyledNavLink
                  to={item.route}
                  onClick={handleToggleMenu}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.name}
                </StyledNavLink>
              </li>
            ))}
          </ul>
          <div className="media-header">
            <span className="media-header__line" />
            <span className="media-links">
              {media.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  <item.icon />
                </Link>
              ))}
            </span>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};
