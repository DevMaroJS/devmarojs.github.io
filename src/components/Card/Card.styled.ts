import { breakpoint } from "@utils";
import styled from "styled-components";

export const StyledCard = styled.div<{
  width?: string,
  height?: string
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  border: 1px solid var(--white);
  padding: 0.3rem;
  color: var(--gray-2);

  @media only screen and (min-width: ${breakpoint.medium}px) {
    width: ${({ width }) => width || 'auto'};
  }
`