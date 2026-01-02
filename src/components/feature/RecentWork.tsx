import { useState, useEffect } from 'react';

export default function RecentWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGooglePhotos();
  }, []);

  const fetchGooglePhotos = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/functions/v1/google-reviews`
      );
      
      const data = await response.json();
      
      // Check if we got valid photos from Google
      if (response.ok && data.photos && data.photos.length > 0) {
        const googlePhotos = data.photos.map((photo: any, index: number) => ({
          image: photo.url,
          title: `Professional Garage Door ${['Installation', 'Repair', 'Service', 'Maintenance', 'Opener Installation', 'Spring Replacement'][index] || 'Project'}`,
          description: 'High-quality workmanship and professional service'
        }));
        
        // Add custom images first, then Google photos
        setPhotos([...customPhotos, ...googlePhotos]);
      } else {
        // Use fallback images if Google API fails
        if (process.env.NODE_ENV === 'development') {
          console.log('Using fallback images. Google API status:', data.error || 'No photos available');
        }
        setPhotos([...customPhotos, ...defaultProjects]);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Using fallback images due to error:', error);
      }
      setPhotos([...customPhotos, ...defaultProjects]);
    } finally {
      setLoading(false);
    }
  };

  const customPhotos = [
    {
      image: 'https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/6c1b03291502bee542d52ba370b557cf.jpeg',
      title: 'Professional Garage Door Installation'
    },
    {
      image: 'https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/5ee3fafe7c08f7d3798ff08932a9a1d9.jpeg',
      title: 'Expert Garage Door Service'
    },
    {
      image: 'https://static.readdy.ai/image/b69172f381814b1e7c2f555a7760d2b1/9f70538874f046536c17d5849a06e8ef.jpeg',
      title: 'Quality Garage Door Repair'
    }
  ];

  const defaultProjects = [
    {
      image: 'https://readdy.ai/api/search-image?query=Professional%20garage%20door%20installation%20project%20showing%20a%20newly%20installed%20white%20residential%20garage%20door%20with%20clean%20modern%20design%2C%20technician%20in%20uniform%20completing%20final%20adjustments%2C%20suburban%20home%20exterior%20with%20driveway%2C%20bright%20daylight%2C%20high%20quality%20professional%20photography%20style&width=800&height=533&quality=85&seq=gd001&orientation=landscape',
      title: 'Door Installation Project'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Garage%20door%20repair%20service%20in%20progress%2C%20technician%20working%20on%20garage%20door%20mechanism%2C%20tools%20and%20equipment%20visible%2C%20residential%20garage%20setting%2C%20professional%20service%20quality%2C%20detailed%20repair%20work%20being%20performed%2C%20clean%20suburban%20environment&width=800&height=533&quality=85&seq=gd002&orientation=landscape',
      title: 'Garage Door Repair'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Garage%20door%20opener%20and%20light%20installation%2C%20professional%20technician%20installing%20LED%20lighting%20system%20on%20garage%20door%20opener%2C%20modern%20residential%20garage%20interior%2C%20clean%20installation%20work%2C%20bright%20lighting%20setup%2C%20professional%20service%20quality&width=800&height=533&quality=85&seq=gd003&orientation=landscape',
      title: 'Light Installation'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Professional%20garage%20door%20service%20team%20at%20work%2C%20uniformed%20technicians%20providing%20expert%20garage%20door%20maintenance%2C%20modern%20residential%20home%20exterior%2C%20professional%20service%20van%20in%20background%2C%20quality%20workmanship%20demonstration&width=800&height=533&quality=85&seq=gd004&orientation=landscape',
      title: 'Professional Service'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=High%20quality%20garage%20door%20installation%20completed%2C%20beautiful%20new%20garage%20door%20on%20upscale%20residential%20home%2C%20perfect%20installation%20craftsmanship%2C%20clean%20finished%20work%2C%20satisfied%20customer%20home%20exterior%2C%20professional%20results%20showcase&width=800&height=533&quality=85&seq=gd005&orientation=landscape',
      title: 'Quality Installation'
    }
  ];

  const displayProjects = photos.length > 0 ? photos : [...customPhotos, ...defaultProjects];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Recent <span className="text-orange-500">Works</span>
            </h2>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Recent <span className="text-orange-500">Works</span>
          </h2>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative w-full max-w-full overflow-hidden">
          <div className="overflow-hidden w-full max-w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {displayProjects.map((project, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-2 min-w-0">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover object-top"
                      loading="lazy"
                      width="800"
                      height="533"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {displayProjects.slice(0, 4).map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover object-top"
                loading="lazy"
                width="400"
                height="267"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
