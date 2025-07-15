import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    country: '',
    email: '',
    phone: '',
    interests: [] as string[],
    other: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in WordPress, this would be handled by Contact Form 7 or similar
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        country: '',
        email: '',
        phone: '',
        interests: [],
        other: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    'Land',
    'Camping spot',
    'Vacation home',
    'Permanent home',
    'Run Airbnb',
    'Co-founder',
    'Other'
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tropical property journey? Get in touch with our experts and let's make your dreams a reality
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`glass-card p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Location fields */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Contact fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  What interests you? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary/50 focus:ring-2"
                      />
                      <span className="text-sm text-foreground">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other field */}
              {formData.interests.includes('Other') && (
                <div>
                  <label htmlFor="other" className="block text-sm font-medium text-foreground mb-2">
                    Please specify:
                  </label>
                  <input
                    type="text"
                    id="other"
                    name="other"
                    value={formData.other}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your tropical property dreams..."
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="bg-muted/50 border border-border rounded-lg p-4 text-center text-sm text-muted-foreground">
                <i className="ph ph-shield-check text-2xl mb-2"></i>
                <p>reCAPTCHA will be integrated here during WordPress deployment</p>
              </div>

              {/* Submit button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neuro-button px-12 py-4 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ph ph-circle-notch animate-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="ph ph-paper-plane-tilt"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
