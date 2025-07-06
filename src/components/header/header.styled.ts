import styled from "styled-components";

export const StyledHeader = styled.div<{ $isContactPage?: boolean }>`
  display: flex;
  justify-content: ${({ $isContactPage }) => $isContactPage ? 'start' : 'end'};
`