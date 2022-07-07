import { NavLink } from "react-router-dom";

function HeaderNavBar() {
  return (
    <nav className="nav-container">
      <NavLink exact to="/" style={{ textDecoration: "none" }}>
        <h1>plannit</h1>
      </NavLink>
      <NavLink to="/login">
        <button className="login-nav-btn">LOGIN</button>
      </NavLink>
    </nav>
  );
}

export default HeaderNavBar;
