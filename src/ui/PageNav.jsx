import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
const NavBox = styled.div`
  position: sticky;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem;
  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  & a:link,
  & a:visited {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
  }

  & a.active {
    color: var(--color-green-0);
  }
`;

function PageNav() {
  return (
    <NavBox>
      <Nav>
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <DarkModeToggle />
          </li>
          <li>
            <NavLink to="/roomtype">房型介紹</NavLink>
          </li>
          <li>
            <NavLink to="/about">關於我們</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login">
              登入
            </NavLink>
          </li>
        </ul>
      </Nav>
    </NavBox>
  );
}

export default PageNav;
