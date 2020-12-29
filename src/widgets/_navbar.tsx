import React from "react";
import { Link } from "react-router-dom";
import { Links } from "../data/routes.data";
import { AuthLinks, Brand, Nav, NavLinks } from "../styles/navbar.stc";

const Navbar = () => {
  return (
    <Nav>
      <div className="wrapper">
        <Brand>
          <Link to="/">.ecom</Link>
        </Brand>
        <NavLinks>
          {Links.map((i, k) => (
            <Link to={i.link} key={k}>
              {i.label}
            </Link>
          ))}
        </NavLinks>
        <AuthLinks>
            <Link to='/'>Log in</Link>
        </AuthLinks>
      </div>
    </Nav>
  );
};

export default Navbar;
