import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  error?: Error;
  resetError?: () => void;
}

const ErrorPage = ({ error, resetError }: ErrorPageProps) => {
  const isNotFound = !error || error.message?.includes('404');
  
  return (
    <div className="py-5 text-center d-flex align-items-center" style={{ minHeight: '70vh' }}>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg border-0 p-5 rounded-4">
              <div className="mb-4">
                <div 
                  className="display-1 fw-bold mb-3" 
                  style={{ 
                    color: 'var(--primary-color)', 
                    fontSize: '6rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  {isNotFound ? '404' : '⚠️'}
                </div>
                <h2 className="mb-3" style={{ color: '#222222', fontWeight: 700 }}>
                  {isNotFound ? 'Page Not Found' : 'Oops! Something went wrong'}
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {error?.message || 
                   (isNotFound 
                     ? "The page you're looking for doesn't exist. It might have been moved or deleted." 
                     : "An unexpected error occurred. Please try again or contact support if the problem persists."
                   )}
                </p>
              </div>
              
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link 
                  to="/" 
                  className="btn px-4 py-2"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    borderColor: 'var(--primary-color)',
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    minWidth: '120px',
                    textDecoration: 'none'
                  }}
                >
                  🏠 Go Home
                </Link>
                {resetError && (
                  <Button 
                    variant="outline-secondary" 
                    onClick={resetError}
                    className="px-4 py-2"
                    style={{ 
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      borderRadius: '8px',
                      minWidth: '120px',
                      borderColor: 'var(--primary-color)',
                      color: 'var(--primary-color)'
                    }}
                  >
                    🔄 Try Again
                  </Button>
                )}
              </div>
              
              <div className="mt-4 pt-3 border-top">
                <small className="text-muted">
                  Need help? Contact us at{' '}
                  <a 
                    href="mailto:helpdesk.egramin@gmail.com" 
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    helpdesk.egramin@gmail.com
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;