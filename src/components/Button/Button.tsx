import type React from 'react';
import { StyledButton } from './Button.styled';
import { useNavigate } from 'react-router-dom';

interface Props {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode | string;
  link?: string;
}

export const Button: React.FC<Props> = ({ variant, children, link }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <StyledButton className={variant} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
};
