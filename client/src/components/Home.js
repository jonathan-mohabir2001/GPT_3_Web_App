import React, { useState } from 'react';
import Generate from './Generate';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="home-main-screen">
      <Navbar bg="light" expand="md" expanded={expanded}>
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : 'expanded')}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/generate">
                Generate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <p>It's time for you to head over to the next page</p>
        <Link to="/generate" className="btn btn-primary">
          Click Here
        </Link>
      </div>

      <footer className="home-footer fixed-bottom bg-light py-3">
        <p className="text-center mb-0">Developed By Jonathan Mohabir</p>
        <p className="text-center mb-0">API source: OpenAi</p>
      </footer>
    </div>
  );
}

export default Home;
