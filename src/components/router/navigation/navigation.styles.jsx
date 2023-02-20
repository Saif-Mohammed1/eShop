import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GlColor = "white";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #2e2e36;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: end;
  width: 70px;
  align-items: center;
`;
export const EShopIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: yellow;
  @media (max-width: 500px) {
    width: 45px;
  }
`;
export const NavLinks = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin: 0 13px;
  .eShop {
    font-size: 26px;
    font-weight: bold;
    color: ${GlColor};
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: ${GlColor};
    span {
      display: block;
      font-size: 9px;
    }
  }
`;
export const SearchFieldForm = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  input {
    outline: none;
    border: none;
    width: 100%;
    border-radius: 16px;
    padding: 9px;
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-left: -33px;
  color: #2e2e36;
  &:hover {
    cursor: pointer;
  }
`;
export const SignOut = styled.p`
  font-size: 12px !important;
  font-weight: bold;
  color: ${GlColor};
  padding: 10px 20px;

  span {
    display: block;
  }
  .out {
    padding: 2px;
    cursor: pointer;
  }
`;
