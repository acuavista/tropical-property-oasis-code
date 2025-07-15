import { useEffect, useRef, useState } from 'react';
import cartagenaAerial from '../assets/cartagena-aerial.jpg';
import tropicalSunset from '../assets/tropical-sunset.jpg';
import premiumBeachfront from '../assets/premium-beachfront.jpg';

const LatestInsightsSection = () => {
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

  const insights = [
    {
      title: "Cartagena Real Estate Market Trends 2024",
      image: cartagenaAerial,
      description: "Discover the latest trends in Cartagena's booming real estate market and why international investors are flocking to Colombia's Caribbean coast.",
      date: "December 15, 2024",
      readTime: "5 min read",
      link: "/blog/cartagena-real-estate-trends-2024"
    },
    {
      title: "Building Your Dream Home in Paradise",
      image: tropicalSunset,
      description: "A comprehensive guide to construction in Cartagena, from permits to completion. Learn about local building codes, materials, and sustainable practices.",
      date: "December 10, 2024",
      readTime: "8 min read",
      link: "/blog/building-dream-home-paradise"
    },
    {
      title: "Financing Your Tropical Property Investment",
      image: premiumBeachfront,
      description: "Understanding the unique financing options available for international property buyers in Colombia and how to maximize your investment potential.",
      date: "December 5, 2024",
      readTime: "6 min read",
      link: "/blog/financing-tropical-property-investment"
    }
  ];

  return (
    <section id="latest" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest news, trends, and expert insights from the Cartagena real estate market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article 
              key={insight.title}
              className={`glass-card p-6 group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-light">
                  {insight.date}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-medium">{insight.readTime}</span>
                <i className="ph ph-clock text-primary"></i>
              </div>
              
              <h3 className="text-xl font-light text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {insight.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {insight.description}
              </p>
              
              <a 
                href={insight.link}
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
              >
                <span>Continue Reading</span>
                <i className="ph ph-arrow-right ml-2"></i>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="neuro-button px-8 py-4 text-foreground hover:text-primary transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span className="font-medium">View All Articles</span>
            <i className="ph ph-arrow-right text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;