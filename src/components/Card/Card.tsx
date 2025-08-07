import type React from 'react';
import { StyledCard } from './Card.styled';

interface Props {
  title?: string;
  image?: string;
  description?: string;
  children?: React.ReactNode | string;
  width?: string;
  height?: string;
  className?: string;
  contentAlign?: string;
  bodyAlignment?: string;
  alignItems?: string;
}

export const Card: React.FC<Props> = ({
  title,
  image,
  description,
  children,
  width,
  height,
  contentAlign,
  bodyAlignment,
  alignItems,
  className = '',
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      className={className}
      contentAlign={contentAlign}
      bodyAlignment={bodyAlignment}
      alignItems={alignItems}
    >
      {image && <img src={image} />}
      {title && <div className="title">{title}</div>}
      {description && <div className="description">{description}</div>}
      {children && <div className="body">{children}</div>}
    </StyledCard>
  );
};
