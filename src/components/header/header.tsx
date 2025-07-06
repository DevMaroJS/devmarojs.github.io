import { useLocation } from "react-router-dom";
import { StyledHeader } from "./header.styled";

export const Header = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <StyledHeader $isContactPage={isContactPage}>
      {isContactPage && <a href="/">{`< GO BACK`}</a>}
      {!isContactPage && <a href="./contact">{`CONTACT ME`}</a>}
    </StyledHeader>
  );
};
