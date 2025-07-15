import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import premiumBeachfront from '../assets/premium-beachfront.jpg';
import beachAccess from '../assets/beach-access.jpg';
import paradiseParcels from '../assets/paradise-parcels.jpg';
import cartagenaAerial from '../assets/cartagena-aerial.jpg';
import tropicalSunset from '../assets/tropical-sunset.jpg';

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const images = [
    {
      src: heroBackground,
      alt: "Pristine beachfront lot with turquoise waters",
      title: "Beachfront Paradise"
    },
    {
      src: premiumBeachfront,
      alt: "Premium beachfront property",
      title: "Premium Beachfront"
    },
    {
      src: beachAccess,
      alt: "Beach access property",
      title: "Beach Access Lot"
    },
    {
      src: paradiseParcels,
      alt: "Tropical paradise parcel",
      title: "Paradise Parcel"
    },
    {
      src: cartagenaAerial,
      alt: "Aerial view of Cartagena",
      title: "Cartagena Coastline"
    },
    {
      src: tropicalSunset,
      alt: "Tropical sunset",
      title: "Tropical Sunset"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the breathtaking beauty of Cartagena's tropical properties and pristine beaches
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`glass-card p-2 cursor-pointer group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ph ph-magnifying-glass-plus text-white text-3xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/gallery"
            className="neuro-button px-8 py-4 text-foreground hover:text-primary transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span className="font-medium">View Full Gallery</span>
            <i className="ph ph-arrow-right text-lg"></i>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <X size={24} className="text-white" />
            </button>
            
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <a 
                href="/gallery"
                className="neuro-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span className="font-medium">View Full Gallery</span>
                <i className="ph ph-arrow-right text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;