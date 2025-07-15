import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b9449fcd?w=100&h=100&fit=crop&crop=face",
      quote: "I never thought I could afford to own a property just a few blocks from the Caribbean sea. BeachLovers not only made that possible, but I was able to get started with just a downpayment. The best part was I could use the property whenever I travel to Cartagena. Great people, great opportunity.",
      result: "Achieved affordable tropical property ownership with low down payment"
    },
    {
      name: "Michael Chen",
      location: "San Francisco, USA",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "I was a bit skeptical at first, but I was pleasantly surprised when I visited the lots. I chose one on the spot, and the process was incredibly smooth. BeachLovers delivered on every promise.",
      result: "Successfully acquired a prime lot, exceeding expectations"
    },
    {
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The financing options were exactly what I needed. 90% financing meant I could invest in my dream tropical property without depleting my savings. The team guided me through every step of the process.",
      result: "Secured 90% financing for dream tropical property investment"
    },
    {
      name: "James Wilson",
      location: "London, UK",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Building my vacation home in Cartagena was seamless thanks to BeachLovers' construction services. From permits to completion, they handled everything professionally. Now I have my own slice of paradise.",
      result: "Built dream vacation home with full-service construction support"
    },
    {
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      quote: "The property values have already increased significantly since my purchase. What started as a vacation investment has become one of my best financial decisions. The rental income covers my financing payments.",
      result: "Achieved strong ROI with rental income covering financing costs"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from satisfied property owners who made their tropical dreams a reality
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center">
                  <div className="mb-8">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
                    />
                    <h4 className="text-xl font-light text-foreground mb-2">{testimonial.name}</h4>
                    <p className="text-primary text-sm font-medium">{testimonial.location}</p>
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-foreground font-medium">Result Achieved:</p>
                    <p className="text-sm text-primary">{testimonial.result}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 hover:bg-card rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 hover:bg-card rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;