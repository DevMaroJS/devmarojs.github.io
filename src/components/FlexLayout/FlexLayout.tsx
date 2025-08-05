import styled from 'styled-components';

interface Props {
  direction: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export const FlexLayout = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap || '0'};
`;
