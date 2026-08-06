import { Container } from 'react-bootstrap';
import sbiLogo from '../assets/images/sbi.png';
import licLogo from '../assets/images/LIC-Logo.jpg';
import iciciLogo from '../assets/images/icici-bank-ne-logo.jpg';
import hdfcLogo from '../assets/images/hdfc.png';
import nicLogo from '../assets/images/nicjpg.jpeg';
import aprbLogo from '../assets/images/aprb.png';

const PARTNERS = [sbiLogo, licLogo, iciciLogo, hdfcLogo, nicLogo, aprbLogo]

const About = () => {

  return (
    <div className="downloads py-5">
      <Container>
        <div className="title mb-3">
          <h3> About <span> Us</span></h3>
        </div>

        <p>E-Gramin Services Pvt Ltd is an ISO Certified Private Limited Organization with our registered office in Dispur, Guwahati and zonal offices in almost all districts of Assam. We have a strong network presence in all the nooks and corners of the North-Eastern region. Our mission is to bring convenience to the consumer's doorstep, enabling them to access a diversified range of B2C services through a vibrant delivery mechanism by developing rural level entrepreneurs. We also bring inclusive prosperity by partnering with government agencies and financial institutions for citizen-centric projects.</p>
        
        <p>We promote Financial Inclusion Projects and bring awareness to the rural masses by providing various banking and non-banking services at their doorsteps. We also operate with various national and regional rural banks as Business Correspondents (BC) to provide kiosk banking services in the NE Region.</p>

        <div className="partners py-5">
          <Container className="text-center">
            <div className="title mb-5">
              <h3>Our Banking & <span>Service Partners</span></h3>
            </div>
            {PARTNERS.map((partner, index) => (
              <img 
                key={index} 
                src={partner} 
                className="px-3" 
                alt="Partner" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ))}
          </Container>
        </div>

        <p>E-Gramin also provides Computer Education Centre (ISO Certified 9001:2015).</p>
        <p>Apart from education, we also deal with IT & ITeS, Telecom, etc.</p>
        <p>
          We have our existing network in various parts on Arunachal Pradesh operating 
          various banking and non-banking centres so, have our expertise about the 
          geographical locations and by the time we are able connect a good bonding 
          with the local authorities and people.
        </p>
        <p>
          We also can ensure that we can involve maximum SHGs and also provide 
          financial training by expert trainers (both technical and non technical part) 
          covering financial literacy, facilitation services for recovery of NPA, 
          awareness on insurance scheme etc. with the help of banking and insurance 
          authorities.
        </p>
      </Container>
    </div>
  );
};

export default About;