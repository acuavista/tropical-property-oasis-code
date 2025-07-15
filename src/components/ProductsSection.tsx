import { useEffect, useRef, useState } from 'react';
import premiumBeachfront from '../assets/premium-beachfront.jpg';
import beachAccess from '../assets/beach-access.jpg';
import tropicalSunset from '../assets/tropical-sunset.jpg';

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const products = [
    {
      title: "Buildable Lots",
      image: premiumBeachfront,
      description: "Prime real estate properties in Cartagena. Perfect for building your dream tropical home with stunning ocean views and easy beach access.",
      link: "/properties",
      icon: "ph ph-house"
    },
    {
      title: "Your Vision",
      image: beachAccess,
      description: "Whether you want a glam tent, a prefab house, your home, or anything in between, we got you covered. Turn your tropical dreams into reality.",
      link: "/services",
      icon: "ph ph-lightbulb"
    },
    {
      title: "Our Financing",
      image: tropicalSunset,
      description: "We are the only company on the market that provides in-house financing. We offer up to 90% financing to our clients because we own all our properties outright.",
      link: "/financing",
      icon: "ph ph-credit-card"
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Your Paradise, Your Choice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From prime lots to custom construction and flexible financing - we provide everything you need for your tropical property journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className={`glass-card p-6 group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className={`${product.icon} text-primary text-2xl`}></i>
                </div>
              </div>
              
              <h3 className="text-xl font-light text-foreground mb-4">{product.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <a 
                href={product.link}
                className="neuro-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 inline-flex items-center space-x-2 w-full justify-center"
              >
                <span className="font-medium">More Info</span>
                <i className="ph ph-arrow-right text-lg"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;