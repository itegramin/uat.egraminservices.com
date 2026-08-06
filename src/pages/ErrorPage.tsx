import { Container, Button } from 'react-bootstrap';
import type { FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  const message = error instanceof Error ? error.message : String(error ?? '');
  const isNotFound = message.includes('404');

  return (
    <div className="py-5 text-center d-flex align-items-center" style={{ minHeight: '70vh' }}>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg border-0 p-5 rounded-4">
              <div className="mb-4">
                <div
                  className="display-1 fw-bold mb-3"
                  style={{ color: 'var(--primary-color)', fontSize: '6rem' }}
                >
                  {isNotFound ? '404' : '⚠️'}
                </div>
                <h2 className="mb-3" style={{ color: '#222222', fontWeight: 700 }}>
                  {isNotFound ? 'Page Not Found' : 'Oops! Something went wrong'}
                </h2>
                <p className="text-muted mb-4">
                  {message ||
                    (isNotFound
                      ? "The page you're looking for doesn't exist."
                      : "An unexpected error occurred. Please try again.")
                  }
                </p>
              </div>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/" className="btn btn-primary">🏠 Go Home</Link>
                {resetErrorBoundary && (
                  <Button variant="outline-secondary" onClick={resetErrorBoundary}>
                    🔄 Try Again
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
