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
  
  .logo {
    display: flex;
    align-items: center;  
    padding: 0px 16px;  
  }
  
  nav{
    display: inline-flex;
    padding: 0px 16px;

    ul{
      display: flex;
      gap: 8px;
      list-style: none;
    }
  }
`

export const StyledNavLink = styled(NavLink)`
  color: var(--gray);

  &.active{
    font-weight: 600;
    color: var(--white);    
  }
    
  &::before {
    content: "#";
    color: var(--primary-color);
    font-weight: normal;
  }
    
`