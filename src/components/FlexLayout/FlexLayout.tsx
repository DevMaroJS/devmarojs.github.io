import { breakpoint } from '@utils';
import styled from 'styled-components';

interface Props {
  direction: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  gap?: string;
  minHeight?: string;
}

export const FlexLayout = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  min-height: ${({ minHeight }) => minHeight || 'calc(100vh - 67px)'};
  padding: ${({ padding }) => padding || '0 5rem'};
  gap: ${({ gap }) => gap || '0'};

  @media only screen and (min-width: ${breakpoint.medium}px) {
    min-height: ${({ minHeight }) => minHeight || 'calc(100vh - 88px)'};
  }
`;
