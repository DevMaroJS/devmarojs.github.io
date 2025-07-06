import { useLocation } from "react-router-dom";
import { StyledHeader } from "./header.styled";
import { ROOT } from "../../main";

export const Header = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <StyledHeader $isContactPage={isContactPage}>
      {isContactPage && <a href={ROOT}>{`< GO BACK`}</a>}
      {!isContactPage && <a href={`${ROOT}contact`}>{`CONTACT ME`}</a>}
    </StyledHeader>
  );
};
