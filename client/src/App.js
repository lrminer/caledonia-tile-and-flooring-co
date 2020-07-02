import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col p-0">
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">
              Caledonia Tile & Flooring Co.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <div className="row">
        <div className="col">B</div>
      </div>
      <div className="row">
        <div className="col">C</div>
      </div>
    </div>
  );
}

export default App;
