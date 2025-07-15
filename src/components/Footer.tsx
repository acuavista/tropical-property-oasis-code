import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BL</span>
              </div>
              <span className="text-xl font-light tracking-tight text-foreground">
                BeachLovers
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Making tropical property ownership affordable and hassle-free in Cartagena, Colombia.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <i className="ph ph-map-pin text-primary"></i>
                <span>Cartagena, Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ph ph-phone text-primary"></i>
                <span>+57 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ph ph-envelope text-primary"></i>
                <span>info@beachlovers.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-light text-foreground mb-6">Explore</h4>
            <nav className="space-y-3">
              <a href="/properties" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Properties
              </a>
              <a href="/services" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Services
              </a>
              <a href="/about-us" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                About Us
              </a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Blog
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact Us
              </a>
              <a href="/faq" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                FAQ
              </a>
              <a href="/financing" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Financing
              </a>
            </nav>
          </div>

          {/* Legal & Resources */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-light text-foreground mb-6">Legal</h4>
            <nav className="space-y-3">
              <a href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/sitemap" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Sitemap
              </a>
              <a href="/disclaimer" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Disclaimer
              </a>
            </nav>
          </div>

          {/* Social Media & Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-light text-foreground mb-6">Connect</h4>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="ph ph-facebook-logo text-primary"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="ph ph-instagram-logo text-primary"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="ph ph-linkedin-logo text-primary"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="ph ph-youtube-logo text-primary"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="ph ph-whatsapp-logo text-primary"></i>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-medium text-foreground mb-3">Stay Updated</h5>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full neuro-button px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <i className="ph ph-circle-notch animate-spin"></i>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} BeachLovers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;