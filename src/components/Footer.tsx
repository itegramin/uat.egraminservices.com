import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-default footer pb-2">
      <Container>
        <div className="row">
          <div className="col-md-3">
            <h6>Our Company</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Our Services</h6>
            <ul>
              <li>Banking</li>
              <li>General Insurance</li>
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>POS</li>
              <li>Education and IT</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Reach Us</h6>
            <div className="d-flex mb-3">
              <span className="me-2">🏠</span>
              <span>
                e-Gramin Services Pvt. Ltd <br />
                House No. 39, Sapta Swahid Path <br />
                Dispur, Guwahati - 781006 <br />
                Assam, India
              </span>
            </div>
            <div className="d-flex mb-3">
              <span className="me-2">✉️</span>
              <span>helpdesk[dot]egramin[at]gmail[dot]com</span>
            </div>
            <div className="d-flex mb-3">
              <span className="me-2">📞</span>
              <span>0361-3511441</span>
            </div>
          </div>
        </div>
        <hr className="mb-2" />
        <div className="d-flex justify-content-between">
          <span>&copy; All Rights Reserved. eGramin</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;