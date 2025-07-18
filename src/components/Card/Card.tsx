import type React from 'react';
import { StyledCard } from './Card.styled';

interface Props {
  image?: string;
  description?: string;
  children?: React.ReactNode | string;
  width?: string;
  height?: string;
}

export const Card: React.FC<Props> = ({
  image,
  description,
  children,
  width,
  height,
}) => {
  return (
    <StyledCard width={width} height={height}>
      {image && <img src={image} />}
      {description && <div>{description}</div>}
      {children}
    </StyledCard>
  );
};
