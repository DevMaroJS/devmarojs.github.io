import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoint } from '../../utils/theme';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 1rem 0;
  background-color: var(--background-color);

  .media-header {
    position: relative;
    display: flex;

    .media-header__line {
      display: none;
    }

    .media-links {
      display: flex;
      width: 100%;
      justify-content: space-around;
      padding: 1rem;

      .media-link svg:hover {
        transform: scale(1.1);
        filter: brightness(0) invert(1);
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 0 3rem;

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
    padding: 0 1rem;

    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      flex-direction: column;
      padding-left: 3.125rem;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 0;
    left: 0;
    background: var(--background-color);
    margin: 0;
    width: 100%;
    transition: all 1.5s ease;
    overflow: hidden;
    position: fixed;
    justify-content: space-between;
    padding: 0;
  }

  .menu.active {
    height: calc(100vh - 50px);
  }

  @media only screen and (min-width: ${breakpoint.medium}px) {
    .media-header {
      position: fixed;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      left: 1rem;
      gap: 0.5rem;
      top: 0;
      z-index: 1;

      .media-header__line {
        display: block;
        width: 1px;
        height: 25rem;
        background-color: var(--gray);
      }

      .media-links {
        display: grid;
        grid-auto-columns: 1fr;
        padding: 0;
      }
    }

    nav ul {
      flex-direction: row;
    }

    .menu {
      position: relative;
      height: auto;
      padding-left: 0;
      flex-direction: row;
      gap: 2rem;
    }

    .menu.active {
      height: initial;
      justify-content: initial;
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
