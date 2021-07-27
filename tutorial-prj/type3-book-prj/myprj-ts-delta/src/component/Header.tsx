import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

class Header extends React.Component {
  public render() {
    return (
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">React Shop</h1>
        <nav>
          <NavLink to="/products" className="header-link">
            Products
          </NavLink>
          <NavLink to="/admin" className="header-link">
            Admin
          </NavLink>
        </nav>
      </header>
    );
  }
}
export default Header;
