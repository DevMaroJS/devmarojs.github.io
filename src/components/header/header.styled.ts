import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

    .media-header__line {
      width: 1px;
      height: 33vh;
      background-color: var(--gray);
      display: block;
    }

    .media-links {
      display: grid;
      grid-auto-columns: 1fr;

      .media-link:hover > svg{
        filter: brightness(0) invert(1); 
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;  
    padding: 0px 48px;  
  }
  
  nav{
    display: inline-flex;
    padding: 0px 16px;

    ul{
      display: flex;
      gap: 32px;
      list-style: none;
    }
  }
`

export const StyledNavLink = styled(NavLink)`
  color: var(--gray);

  &.active{
    font-weight: bolder;
    color: var(--white);    
  }

  &:hover {
    color: var(--white);
  }
    
  &::before {
    content: "#";
    color: var(--primary-color);
    font-weight: normal;
  }
    
`