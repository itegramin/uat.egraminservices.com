import { Container, Carousel, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import insuranceIcon from '../assets/images/insurance.png';
import genInsuranceIcon from '../assets/images/genInsurance.png';
import healthInsuranceIcon from '../assets/images/healthInsurance.png';
import bankingIcon from '../assets/images/banking.png';
import posIcon from '../assets/images/pos.png';
import othersIcon from '../assets/images/others.png';
import sbiLogo from '../assets/images/sbi.png';
import licLogo from '../assets/images/LIC-Logo.jpg';
import iciciLogo from '../assets/images/icici-bank-ne-logo.jpg';
import hdfcLogo from '../assets/images/hdfc.png';
import nicLogo from '../assets/images/nicjpg.jpeg';
import aprbLogo from '../assets/images/aprb.png';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import eGraminLogo from '../assets/images/e-gramin-logo.png';
import aboutImg from '../assets/images/about.png';

const SERVICES = [
  {
    icon: insuranceIcon,
    title: 'Life Insurance Policy',
    description: 'LIC, SBI Life and Birla Sun Life'
  },
  {
    icon: genInsuranceIcon,
    title: 'General Insurance',
    description: ''
  },
  {
    icon: healthInsuranceIcon,
    title: 'Health Insurance',
    description: ''
  },
  {
    icon: bankingIcon,
    title: 'Banking',
    description: ''
  },
  {
    icon: posIcon,
    title: 'POS',
    description: ''
  },
  {
    icon: othersIcon,
    title: 'Others',
    description: ''
  }
]

const PARTNERS = [sbiLogo, licLogo, iciciLogo, hdfcLogo, nicLogo, aprbLogo]

const BANNER_LOGO_STYLE = { 
  height: '25%', 
  marginTop: '5%' 
}

const ABOUT_TEXT = {
  intro: 'E-Gramin Services Pvt Ltd is an ISO Certified Private Limited Organization our Registered office in Dispur, Guwahati with Zonal Office in almost all districts of Assam. Our strong network presence in all the nook and corners of North-Eastern region.',
  mission: 'Our mission is to bring convenience to the consumer\'s doorstep, enabling them to access a diversified range of B2C services through a vibrant delivery mechanism by developing rural level entrepreneurs. And also bring inclusive prosperity by partnering with government agencies and financial institutions for citizen centric projects.'
}

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="banner">
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
            {/* <img src="/assets/images/e-gramin-logo.png" className="banner-logo-img" style={{height:'35%'}} alt="Logo" /> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              alt="Second slide"
            />
            {/* <img src="/assets/images/e-gramin-logo.png" className="banner-logo-img" style={{height:'35%'}} alt="Logo" /> */}
          </Carousel.Item>
        </Carousel>
        <img src={eGraminLogo} className="banner-logo-img" style={BANNER_LOGO_STYLE} alt="Logo" />
      </div>

      <div className="partners py-5">
        <Container className="text-center">
          <div className="title mb-5">
            <h3>Our Banking & <span>Service Partners</span></h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            {PARTNERS.map((partner, index) => (
              <img key={index} src={partner} className="" alt="Partner" />
            ))}
          </div>
        </Container>
      </div>

      <div className="about pb-5">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <img src={aboutImg} className="img-fluid" alt="About" />
            </div>
            <div className="col-md-6">
              <div className="title mb-3">
                <h3>About <span>Company</span></h3>
              </div>
              <p>{ABOUT_TEXT.intro}</p>
              <p>{ABOUT_TEXT.mission}</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="services py-5 bg-light">
        <Container>
          <div className="title mb-3 text-center">
            <h3>Our <span>Services</span></h3>
            <p><strong>We offer Insurance Services and products like</strong></p>
          </div>
          <div className="row">
            {SERVICES.map((service, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow-sm boxes">
                  <div className="card-body d-flex align-items-center">
                    <div className="icon me-2">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="text">
                      <h3>{service.title}</h3>
                      {service.description && (
                        <p className="mb-0 small">{service.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body className="p-4">
          PAN Card services are available
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className="px-4 text-white" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;