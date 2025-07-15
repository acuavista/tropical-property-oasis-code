import { useEffect, useRef, useState } from 'react';
import cartagenaAerial from '../assets/cartagena-aerial.jpg';
import premiumBeachfront from '../assets/premium-beachfront.jpg';
import tropicalSunset from '../assets/tropical-sunset.jpg';

const TropicalParadiseSection = () => {
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

  const cards = [
    {
      title: "Why Cartagena",
      image: cartagenaAerial,
      description: "The rich and famous spend millions of dollars to buy their private tropical hideaways, and enjoy the summer sun, sand and surf all year around. Now you too can delight in these same pleasures at a fraction of what they pay. Welcome to Cartagena, Colombia.",
      link: "/blog/why-cartagena"
    },
    {
      title: "Why Properties",
      image: premiumBeachfront,
      description: "Over the past five years, property values in Cartagena have appreciated between 8% and 12% annually. This surge in demand comes from vacation homeowners, entrepreneurs and digital nomads drawn to the warm climate and vibrant urban life.",
      link: "/blog/why-properties"
    },
    {
      title: "Why Now",
      image: tropicalSunset,
      description: "With over 3.5 million visitors in 2024, Cartagena's international profile is growing rapidly. With the completion of the 2nd international airport, the city expects to quadruple visitors. Those who act now get in on the ground floor.",
      link: "/blog/why-now"
    }
  ];

  return (
    <section id="tropical-paradise" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Your Tropical Paradise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why Cartagena is the perfect destination for your tropical property investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={card.title}
              className={`glass-card p-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <h3 className="text-xl font-light text-foreground mb-4">{card.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {card.description}
              </p>
              
              <a 
                href={card.link}
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300"
              >
                <span className="font-medium">More Info</span>
                <i className="ph ph-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TropicalParadiseSection;