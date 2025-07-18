import styled from "styled-components";

export const StyledCard = styled.div<{
  width?: string,
  height?: string
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border: 1px solid var(--gray);
  padding: 0.2rem;
  color: var(--gray-2)
`