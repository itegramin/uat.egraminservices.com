import { Container, Modal } from 'react-bootstrap';
import { useState } from 'react';
import img1 from '../assets/images/gallery-images/thumb/01.jpg';
import img2 from '../assets/images/gallery-images/thumb/02.jpg';
import img3 from '../assets/images/gallery-images/thumb/03.jpg';
import img4 from '../assets/images/gallery-images/thumb/04.jpg';
import img5 from '../assets/images/gallery-images/thumb/05.jpg';
import img6 from '../assets/images/gallery-images/thumb/06.jpg';

const GALLERY_IMAGES = [img1, img2, img3, img4, img5, img6]

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const navButtonStyle = {
    width: '33.33%',
    zIndex: 10,
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <div className="py-5">
      <Container>
        <div className="title mb-4 text-center">
          <h3>Our <span>Gallery</span></h3>
        </div>
        <div className="row">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card" style={{ cursor: 'pointer' }} onClick={() => setSelectedIndex(index)}>
                <img 
                  src={image} 
                  className="card-img-top" 
                  alt={`Gallery ${index + 1}`}
                  style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.2s' }}
                  loading="lazy"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Modal show={selectedIndex !== null} onHide={() => setSelectedIndex(null)} size="lg" centered>
        <Modal.Body className="p-0 position-relative">
          <img 
            src={selectedIndex !== null ? GALLERY_IMAGES[selectedIndex] : ''} 
            alt="Gallery view" 
            style={{ width: '100%', height: 'auto' }}
          />
          {selectedIndex !== null && (
            <>
              <button 
                className="position-absolute top-0 start-0 h-100 border-0 d-flex align-items-center justify-content-start ps-4"
                onClick={() => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : GALLERY_IMAGES.length - 1)}
                style={{ 
                  ...navButtonStyle,
                  background: 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)';
                  e.currentTarget.style.fontSize = '3.5rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)';
                  e.currentTarget.style.fontSize = '3rem';
                }}
              >
                ⟨
              </button>
              <button 
                className="position-absolute top-0 end-0 h-100 border-0 d-flex align-items-center justify-content-end pe-4"
                onClick={() => setSelectedIndex(selectedIndex < GALLERY_IMAGES.length - 1 ? selectedIndex + 1 : 0)}
                style={{ 
                  ...navButtonStyle,
                  background: 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)';
                  e.currentTarget.style.fontSize = '3.5rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)';
                  e.currentTarget.style.fontSize = '3rem';
                }}
              >
                ⟩
              </button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;