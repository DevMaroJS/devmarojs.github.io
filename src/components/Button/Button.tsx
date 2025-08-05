import type React from 'react';
import { StyledButton } from './Button.styled';
import { useNavigate } from 'react-router-dom';

interface Props {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode | string;
  link?: string;
  target?: string;
}

export const Button: React.FC<Props> = ({
  variant,
  children,
  link,
  target = '_self',
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (target === '_blank') {
      window.open(link, '_blank');
      return;
    }
    if (link) {
      navigate(link, {});
    }
  };
  return (
    <StyledButton className={variant} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
};
