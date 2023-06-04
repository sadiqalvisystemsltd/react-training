import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

function Header(props) {
    const onLoginClick = () => {
        props.titleChangeHandler("Login")
        
    }
    const onSignupClick = () => {
        props.titleChangeHandler("Signup")
    }

    const onHomeClick = () => {
        props.titleChangeHandler("Home")
    }

    const onLogout = () => {
      props.logout();
    }

    return (

        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Crypto Exchange</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              <Nav.Link href="#home" onClick={onHomeClick}>Dashboard</Nav.Link>
              {props.loggedIn && <Link to="/blog" style={{marginRight: '10px', marginTop: '8px'}}>Blog</Link>}
              {props.loggedIn && <Link to="/crypto-dashboard" style={{marginRight: '10px', marginTop: '8px'}}>Crypto Dashboard</Link>}
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              {!props.loggedIn && <Link to="/login" style={{marginRight: '10px'}}>Login</Link>}
              {!props.loggedIn && <Link to="/signup" style={{marginRight: '10px'}}>Signup</Link>}
              {props.loggedIn && <Link to="/" onClick={onLogout}>Logout</Link>}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}

export default Header;