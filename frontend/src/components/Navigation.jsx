import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation({ user, logout }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
        <Nav>
            {user ? (
              <>
              <Nav.Link href="$user">
              {user.email} {user.name}
            </Nav.Link>
            <Link to="/logout" onClick={logout} className="nav-link">Logout</Link>
            </>
            ): (
              <>
              </>
            )}
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;