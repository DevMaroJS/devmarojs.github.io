import styled from "styled-components";


export const StyledButton = styled.button`
  border-style: solid;
  border-width: 2px;
  background-color: transparent;
  padding: 0.5rem 1rem;

  &.primary{
    border-color: var(--primary-color);
  }

  &.secondary{
    border-color: var(--gray-2);
  }

`