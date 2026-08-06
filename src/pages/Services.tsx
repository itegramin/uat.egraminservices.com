import { Container } from 'react-bootstrap';
import sbiLogo from '../assets/images/sbi.png';
import licLogo from '../assets/images/LIC-Logo.jpg';
import iciciLogo from '../assets/images/icici-bank-ne-logo.jpg';
import hdfcLogo from '../assets/images/hdfc.png';
import nicLogo from '../assets/images/nicjpg.jpeg';
import aprbLogo from '../assets/images/aprb.png';
import insuranceIcon from '../assets/images/insurance.png';
import genInsuranceIcon from '../assets/images/genInsurance.png';
import healthInsuranceIcon from '../assets/images/healthInsurance.png';
import bankingIcon from '../assets/images/banking.png';
import posIcon from '../assets/images/pos.png';
import othersIcon from '../assets/images/others.png';

const PARTNERS = [sbiLogo, licLogo, iciciLogo, hdfcLogo, nicLogo, aprbLogo]

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

const REACH_DATA = [
  {
    title: 'Registered Office in Guwahati',
    description: 'Serving as our headquarters.'
  },
  {
    title: 'Zonal Offices Across Assam',
    description: 'Ensuring a strong presence in the region.'
  },
  {
    title: 'Network in All Districts',
    description: 'Connecting with communities in every corner.'
  }
]

const PORTFOLIO_DATA = [
  {
    title: 'Banking and Financial',
    description: 'Offering kiosk banking, insurance, and other financial services. Connecting them with government and financial institutions.'
  },
  {
    title: 'Insurance',
    description: 'Providing comprehensive insurance services to protect you and your assets. Helping rural entrepreneurs recognize their potential.'
  },
  {
    title: 'Education and IT',
    description: 'Providing computer education and IT/ITeS solutions and equipping them with the skills to succeed.'
  }
]

const Services = () => {

  return (
    <>
      <div className="partners py-5">
        <Container className="text-center">
          <div className="title mb-5">
            <h3>Our Banking & <span>Service Partners</span></h3>
          </div>
          {PARTNERS.map((partner, index) => (
            <img key={index} src={partner} className="px-3" alt="Partner" />
          ))}
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

      <div className="news py-5">
        <Container>
          <div className="title mb-4 text-center">
            <h3>Extensive Reach Across the <span>Northeast</span></h3>
          </div>
          <div className="row">
            {REACH_DATA.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-3 border-0">
                  <div className="card-body px-0">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="news py-5">
        <Container>
          <div className="title mb-4 text-center">
            <h3>Diversified Portfolio of Our <span>Services</span></h3>
          </div>
          <div className="row">
            {PORTFOLIO_DATA.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-3 border-0">
                  <div className="card-body px-0">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;