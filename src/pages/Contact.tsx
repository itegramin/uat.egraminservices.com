import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useState, useCallback } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!formData.email.includes('@') || !formData.email.includes('.')) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }, [errors])

  return (
    <div className="py-5">
      <Container>
        <div className="title mb-4 text-center">
          <h3>Contact <span>Us</span></h3>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4">
              <h5>Get in Touch</h5>
              {submitStatus === 'success' && (
                <Alert variant="success">Message sent successfully!</Alert>
              )}
              {submitStatus === 'error' && (
                <Alert variant="danger">Failed to send message. Please try again.</Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    isInvalid={!!errors.name}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Enter your message" 
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    isInvalid={!!errors.message}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
                
                <Button 
                  variant="warning" 
                  type="submit" 
                  className="text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card p-4">
              <h5>Contact Information</h5>
              
              <div className="d-flex mb-3">
                <span className="me-2">🏠</span>
                <div>
                  <strong>Address:</strong><br />
                  e-Gramin Services Pvt. Ltd<br />
                  House No. 39, Sapta Swahid Path<br />
                  Dispur, Guwahati - 781006<br />
                  Assam, India
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <span className="me-2">✉️</span>
                <div>
                  <strong>Email:</strong><br />
                  helpdesk[dot]egramin[at]gmail[dot]com
                </div>
              </div>
              
              <div className="d-flex mb-3">
                <span className="me-2">📞</span>
                <div>
                  <strong>Phone:</strong><br />
                  0361-3511441
                </div>
              </div>
              
              <div className="mt-4">
                <h6>Business Hours</h6>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;