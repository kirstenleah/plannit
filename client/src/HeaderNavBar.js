import { NavLink } from "react-router-dom";

function HeaderNavBar() {
  return (
    <nav>
      <NavLink exact to="/" style={{ textDecoration: "none" }}>
        HOME
      </NavLink>
      <NavLink to="/login">LOGIN</NavLink>
    </nav>
  );
}

export default HeaderNavBar;
