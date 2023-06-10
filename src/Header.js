import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import {Row, Col} from 'react-bootstrap';
import { GetAccessTokenSilently } from '@auth0/auth0-react';
import axios from 'axios';

function Header() {
  const { loginWithRedirect, logout, user, isAuthenticated , getAccessTokenSilently} = useAuth0()
  async function callApi() {
    try {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`https://can-of-books-api-ib2y.onrender.com/books`, {
      headers: {
        authorization: `Bearer ${token}`
      },
      loginWithRedirect
    })
    console.log(response.data)
    console.log(token)
  } catch (error) {
    console.log(error.message);
  }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>My Favorite Books</Navbar.Brand>
      <Row>
        <Col><Button onClick={callApi()}>Login with Redirect</Button></Col>
        <Col><Button onClick={logout}>Logout</Button></Col>
      </Row>
      <h3>User is {isAuthenticated ? 'Logged In' : 'Not logged in'}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: 'start' }}>{console.log(user, 'User')}</pre>
      )}
      <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
      {/* PLACEHOLDER: render a navigation link to the about page */}
    </Navbar>
  )
}

export default Header;
