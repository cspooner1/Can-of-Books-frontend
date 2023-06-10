import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <ul>
          <li><Button onClick={loginWithPopup}>Login with Popup</Button></li>
          <li><Button onClick={loginWithRedirect}>Login with Redirect</Button></li>
          <li><Button onClick={logout}>Logout</Button></li>
        </ul>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }

export default Header;
