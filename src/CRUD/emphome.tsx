import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./empdetails.css";
const Emphome = () => {
  return (
    <>
      <div>
        <div className="header">
          <h1>Employee Home</h1>
        </div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="Home"></Navbar.Brand>
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Link as={Link} to={"/addemp"}>
                Add Employee
              </Nav.Link>
              <Nav.Link as={Link} to={"/dashboard"}>
                Dashboard
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Emphome;
