import styled from "styled-components";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavbarContainer = styled.header`
  z-index: 9999;
  position: fixed;
  height: 50px;
  width: 100vw;
  background: var(--blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #fff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
`;

const NavHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    color: inherit;
    text-decoration: none;
  }

  svg {
    font-size: 1.5rem;
    margin-left: 8px;
    color: #499f68;
    background: #fff;
    border-radius: 50%;
  }
`;

const NavHeader = styled.h1`
  font-size: 1.5rem;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavHeaderContainer>
        <Link to="/">
          <NavHeader>House Banking</NavHeader>
          <RiMoneyDollarCircleFill />
        </Link>
      </NavHeaderContainer>
    </NavbarContainer>
  );
};
