import { breakpoint } from '@utils';
import styled from 'styled-components';

const StyledMenuHamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 35px;
  height: 35px;
  border: 0px;
  background: transparent;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background: var(--gray);
    transition: all 0.5s linear;
  }

  .dot-1 {
    transform: translateY(-7px);
  }

  .dot-3 {
    transform: translateY(7px);
  }

  &.active {
    .dot-1 {
      animation-duration: 1.5s;
      animation-name: slide-out-dot-1;
      animation-fill-mode: forwards;
    }

    .dot-2 {
      animation-duration: 1.5s;
      animation-name: slide-out-dot-2;
      animation-fill-mode: forwards;
    }

    .dot-3 {
      animation-duration: 1.5s;
      animation-name: slide-out-dot-3;
      animation-fill-mode: forwards;
    }
  }

  &.hide {
    .dot-1 {
      animation-duration: 1.5s;
      animation-name: slide-in-dot-1;
      animation-fill-mode: forwards;
    }

    .dot-2 {
      animation-duration: 1.5s;
      animation-name: slide-in-dot-2;
      animation-fill-mode: forwards;
    }

    .dot-3 {
      animation-duration: 1.5s;
      animation-name: slide-in-dot-3;
      animation-fill-mode: forwards;
    }
  }

  @keyframes slide-out-dot-1 {
    from {
      transform: translateY(-7px);
    }
    50% {
      transform: translateY(2px);
    }
    to {
      transform: rotate(-45deg) translateY(2px);
    }
  }

  @keyframes slide-in-dot-1 {
    from {
      transform: rotate(-45deg) translateY(2px);
    }
    50% {
      transform: translateY(2px);
    }
    to {
      transform: translateY(-7px);
    }
  }

  @keyframes slide-out-dot-2 {
    from {
      width: 30px;
    }
    to {
      width: 0px;
      opacity: 0;
    }
  }

  @keyframes slide-in-dot-2 {
    from {
      width: 0px;
      opacity: 0;
    }
    to {
      width: 30px;
    }
  }

  @keyframes slide-out-dot-3 {
    from {
      transform: translateY(7px);
    }
    50% {
      transform: translateY(-3px);
    }
    to {
      transform: rotate(45deg) translateY(-3px);
    }
  }

  @keyframes slide-in-dot-3 {
    from {
      transform: rotate(45deg) translateY(-3px);
    }
    50% {
      transform: translateY(-3px);
    }

    to {
      transform: translateY(7px);
    }
  }

  @media only screen and (min-width: ${breakpoint.medium}px) {
    display: none;
  }
`;

interface MenuHamburgerProps {
  onClick: () => void;
  status: string;
}

export const MenuHamburger: React.FC<MenuHamburgerProps> = ({
  onClick,
  status,
}) => {
  return (
    <StyledMenuHamburger
      type="button"
      className={`${status}`}
      onClick={onClick}
    >
      <span className="dot-1" />
      <span className="dot-2" />
      <span className="dot-3" />
    </StyledMenuHamburger>
  );
};
