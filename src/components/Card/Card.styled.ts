import { breakpoint } from "@utils";
import styled from "styled-components";

export const StyledCard = styled.div<{
  width?: string,
  height?: string
  contentAlign?: string;
  bodyAlignment?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ contentAlign }) => contentAlign || 'center'};
  gap: 0.5rem;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border: 1px solid var(--white);
  color: var(--gray-2);
  
  .title{
    width: -webkit-fill-available;
    color: var(--white);
    font-weight: 600;
    font-size: 1.2rem;
    border-bottom: 1px solid var(--white);
    word-break: break-word;
    padding: .5rem;
  }
  
  img{
    width: 100%;
    height: 250px;
    object-fit: cover;

    &:hover {
      transform: scale(1.01);
      transition: transform 0.3s ease-in-out;
    }
  }

  .description{
    width: -webkit-fill-available;
    padding: .5rem;
    border-bottom: 1px solid var(--white);
    word-break: break-word;
  }

  .body{
    display: flex;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    padding: .5rem;
    flex-direction: ${({ bodyAlignment }) => bodyAlignment || 'row'};
  }

  @media only screen and (min-width: ${breakpoint.medium}px) {
    width: ${({ width }) => width || 'auto'};
  }
`