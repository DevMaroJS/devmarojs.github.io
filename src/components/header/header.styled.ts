import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 32px 0px 8px 0px;
  background-color: var(--background-color);

  .media-header {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 16px;
    gap: 8px;
    top: 0px;
    z-index: 1;

    .media-header__line {
      width: 1px;
      height: 33vh;
      background-color: var(--gray);
      display: block;
    }

    .media-links {
      display: grid;
      grid-auto-columns: 1fr;

      .media-link:hover > svg {
        filter: brightness(0) invert(1);
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 0px 48px;

    code {
      font-size: x-large;
      color: var(--gray);
      font-weight: bolder;

      span {
        color: var(--primary-color);
      }

      span:hover {
        background-color: var(--gray-2);
      }
    }
  }

  nav {
    display: block;
    padding: 0px 16px;

    ul {
      display: flex;
      gap: 32px;
      list-style: none;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 0;
    left: 0;
    background: var(--background-color);
    margin: 0;
    width: 100%;
    padding-left: 50px;
    transition-property: height;
    transition-duration: 1.5s; /* different durations for each property */
    overflow: hidden;
    position: fixed;
  }

  .menu.active {
    height: 100vh;
  }

  @media only screen and (min-width: 768px) {
    .menu {
      position: relative;
      height: auto;
      padding-left: 0;
      display: flex;
      flex-direction: row;
      gap: 32px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--gray);

  &.active {
    font-weight: bolder;
    color: var(--white);
  }

  &:hover {
    color: var(--white);
  }

  &::before {
    content: '#';
    color: var(--primary-color);
    font-weight: normal;
  }
`;
