import { Link } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './header.styled';
import GithubIcon from '../../assets/github.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import EmailIcon from '../../assets/email.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="media-header">
        <span className="media-header__line" />
        <span className="media-links">
          <Link
            to="https://www.linkedin.com/in/yldemaro-romero/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <LinkedinIcon />
          </Link>
          <Link
            to="https://github.com/DevMaroJS"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            <GithubIcon />
          </Link>
          <Link to="mailto:yldemaro.1994@gmail.com" className="media-link">
            <EmailIcon />
          </Link>
        </span>
      </div>
      <Link to="/" className="logo">
        <code>
          {`<`}
          <span>DevMaroJS</span>
          {`/>`}
        </code>
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
