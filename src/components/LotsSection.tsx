import { useEffect, useRef, useState } from 'react';
import premiumBeachfront from '../assets/premium-beachfront.jpg';
import beachAccess from '../assets/beach-access.jpg';
import paradiseParcels from '../assets/paradise-parcels.jpg';

const LotsSection = () => {
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

  const lots = [
    {
      title: "Premium Beachfront",
      image: premiumBeachfront,
      size: "2,000 sf",
      price: "$200,000",
      pricePerSf: "$100/sf",
      description: "Wake up to the Caribbean Sea. Direct access to pristine sands and unparalleled views. Your ultimate luxury escape.",
      benefits: [
        "Highest appreciation potential",
        "Exclusive front-row location", 
        "Ultimate privacy",
        "Direct ocean access",
        "Unparalleled views"
      ],
      recommended: false
    },
    {
      title: "Beach Access",
      image: beachAccess,
      size: "2,000 sf",
      price: "$140,000",
      pricePerSf: "$70/sf",
      description: "Just steps from the shore. Enjoy beach living without the beachfront premium. The perfect balance of value and convenience.",
      benefits: [
        "Strong investment return",
        "Accessible luxury",
        "Vibrant community proximity",
        "Ideal for rental income",
        "Short walk to pristine beaches"
      ],
      recommended: true
    },
    {
      title: "Paradise Parcels",
      image: paradiseParcels,
      size: "2,000 sf",
      price: "$55,000",
      pricePerSf: "$27.5/sf",
      description: "Secluded havens nestled amidst lush Colombian landscapes. Ideal for tranquil retreats and connecting with nature.",
      benefits: [
        "Most affordable entry",
        "Peaceful retreat",
        "Expansive greenery",
        "Strong long-term growth",
        "Perfect for eco-friendly builds"
      ],
      recommended: false
    }
  ];

  return (
    <section id="lots" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Welcome to Your Tropical Paradise
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Sand, Sun, and Beach Galore
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully curated selection of premium lots, each offering unique advantages for your tropical property investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lots.map((lot, index) => (
            <div 
              key={lot.title}
              className={`glass-card p-6 relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${lot.recommended ? 'ring-2 ring-primary/50' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {lot.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-1 rounded-full text-primary-foreground text-sm font-medium">
                    Recommended
                  </div>
                </div>
              )}
              
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={lot.image} 
                  alt={lot.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <h3 className="text-2xl font-light text-foreground mb-2">{lot.title}</h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-light text-primary">{lot.price}</span>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{lot.size}</div>
                  <div className="text-sm text-muted-foreground">{lot.pricePerSf}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {lot.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {lot.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <i className="ph ph-check-circle text-primary text-lg"></i>
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="neuro-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 inline-flex items-center space-x-2 w-full justify-center">
                <span className="font-medium">View Details & Inquire</span>
                <i className="ph ph-arrow-right text-lg"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LotsSection;