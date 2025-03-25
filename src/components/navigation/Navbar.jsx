import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/styles/navigation/Navbar.css";

const Navbar = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <BootstrapNavbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="py-3 sticky-top"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          Hostel Management
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/book-now">Book Now</Nav.Link>
                <Nav.Link as={Link} to="/student-dashboard">Dashboard</Nav.Link>
              </>
            )}
          </Nav>
          
          <Nav>
            {!isAuthenticated ? (
              <>
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="outline-light" 
                  className="me-2"
                >
                  Login
                </Button>
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="light"
                >
                  Register
                </Button>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <Nav.Link as={Link} to="/profile" className="me-3">
                  My Profile
                </Nav.Link>
                <Button 
                  variant="outline-light" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

