import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import eGraminLogo from '../assets/images/e-gramin-logo.png';

const CONTACT_EMAIL = 'helpdesk.egramin@gmail.com'
const CONTACT_PHONE = '0361-3511441'
const NOTIFICATION_TEXT = 'PAN Card services are available'

const Header = () => {
  const [logoError, setLogoError] = useState(false)

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Logo image failed to load:', {
      src: e.currentTarget.src,
      timestamp: new Date().toISOString()
    })
    setLogoError(true)
  }

  return (
    <>
      <div className="top-bar">
        <Container>
          <div className="row">
            <div className="col-xl-4 col-lg-5 d-none d-lg-block">
              <p className="mb-0">Welcome to e-Gramin</p>
            </div>
            <div className="col-xl-8 col-lg-7 col-12 text-end">
              <div className="top-nav">
                <span className="top-text">{CONTACT_EMAIL}</span>
                <span className="top-text">{CONTACT_PHONE}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="header">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Brand as={Link} to="/" className="logo">
              {!logoError ? (
                <img 
                  src={eGraminLogo} 
                  alt="e-Gramin" 
                  onError={handleLogoError}
                />
              ) : (
                <span>e-Gramin</span>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <div className="notification">
        <Container className="p-2">
          <div className="marquee">
            <span>{NOTIFICATION_TEXT}</span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;