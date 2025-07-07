import { Link } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <StyledNavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">projects</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about-me">about-me</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">contact</StyledNavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
