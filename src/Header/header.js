import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              {!props.loggedIn && <Nav.Link href="#login" onClick={onLoginClick} >Login</Nav.Link>}
              {!props.loggedIn && <Nav.Link href="#signup" onClick={onSignupClick}>Signup</Nav.Link>}
              {props.loggedIn && <Nav.Link href="#logout" onClick={onLogout}>Logout</Nav.Link>}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}

export default Header;