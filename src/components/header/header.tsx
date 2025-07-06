import { Link, useLocation } from "react-router-dom";
import { StyledHeader } from "./header.styled";

export const Header = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <StyledHeader $isContactPage={isContactPage}>
      {isContactPage && <Link  to="/">{`< GO BACK`}</Link >}
      {!isContactPage && <Link  to="/contact">{`CONTACT ME`}</Link >}
    </StyledHeader>
  );
};
