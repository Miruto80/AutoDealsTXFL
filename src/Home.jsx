import React, { useEffect } from 'react';
import { cars } from './Inventory.jsx';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import './assets/css/hero.css';

export default function Home() {
  const latestCars = cars.slice(0, 9);
  const heroSlides = [
    {
      img: '/imagenes/Comunes/Fondocarro.webp',
      title: 'Find Your Dream Car',
      subtitle: 'Best deals, best service, best cars.'
    },
    {
      img: '/imagenes/Comunes/Troca.webp',
      title: 'Trucks for Every Need',
      subtitle: 'Power, reliability, and comfort in one place.'
    },
    {
      img: '/imagenes/Comunes/Prueba.webp',
      title: 'Drive with Confidence',
      subtitle: 'Certified pre-owned vehicles ready for you.'
    },
  ];
  return (
    <div className="container-fluid p-0">
      <section className="hero-section position-relative d-flex align-items-center justify-content-center" style={{minHeight: '60vh', overflow: 'hidden'}}>
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 3500,
            speed: 1200,
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            pauseOnFocus: false,
          }}
          className="hero-slider w-100 h-100"
          aria-label="Hero Car Slider"
        >
         {heroSlides.map((slide, idx) => (
  <SplideSlide key={idx}>
  <div
    className="hero-slide"
    style={{ backgroundImage: `url(${slide.img})` }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-text-box text-center">
      <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
      <p className="lead mb-4">{slide.subtitle}</p>
      <Link to="/inventory" className="btn btn-gradient-green btn-lg px-5 py-3 fw-bold shadow" style={{ background: 'linear-gradient(90deg, #0782fa 60%, #21d4fd 100%)', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1.15rem', letterSpacing: '1px', transition: 'background 0.2s, transform 0.2s', boxShadow: '0 2px 12px rgba(7,130,250,0.12)' }}>
        Browse Inventory
      </Link>
    </div>
  </div>
</SplideSlide>

))}

        </Splide>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </section>
      <div className="container mt-5">
        <div className="mb-5">
          <h3 className="text-white mb-3 text-center" style={{fontWeight: 700, fontSize: '2.1rem', letterSpacing: '1px', color: '#0782fa'}}>
            Our vehicles
          </h3>
          <Splide
            options={{
              type: 'loop',
              perPage: 3,
              gap: '1rem',
              arrows: true,
              pagination: false,
              breakpoints: {
                992: { perPage: 2 },
                600: { perPage: 1 }
              }
            }}
            aria-label="Our vehicles"
            style={{borderRadius: '18px', padding: '1.5rem'}}
          >
            {latestCars.map((car, idx) => (
              <SplideSlide key={car.id + '-' + idx}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    style={{width: '100%', maxWidth: '340px', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem'}}
                  />
                  <div className="text-center">
                    <h5 className="mb-1">{car.title}</h5>
                    <div className="small text-secondary mb-1">Year: {car.year} | {car.type}</div>
                    <div className="fw-bold text-success mb-1">{car.price}</div>
                    <div className="text-secondary" style={{fontSize: '0.95rem'}}>
                      <i className="fa-solid fa-location-dot me-1" style={{color: '#0782fa'}}></i>
                      {car.location || 'Ubicación no disponible'}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        <div className="d-flex justify-content-center mb-3 mt-3">
          <Link to="/inventory" className="btn btn-gradient-green btn-lg px-4 py-2 fw-bold shadow" style={{ background: 'linear-gradient(90deg, #0782fa 60%, #21d4fd 100%)', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1.15rem', letterSpacing: '1px', transition: 'background 0.2s, transform 0.2s', boxShadow: '0 2px 12px rgba(7,130,250,0.12)' }}>
            More vehicles
          </Link>
        </div>
        </div>
      </div>
      {/* About Us Section */}
      <section className="about-section py-4" style={{ background: 'linear-gradient(90deg, #f8fafc 60%, #e0f7fa 100%)', borderRadius: '18px', margin: '2rem 0', minHeight: '320px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center" style={{ minHeight: '350px' }}>
             <video
  src="/imagenes/Comunes/Video%20promo.mp4"
  className="w-100 h-100 ms-md-3"
  style={{
    maxWidth: '100%',
    maxHeight: '580px',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    objectFit: 'cover'
  }}
  controls
>
  Your browser does not support the video tag.
</video>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3" style={{ color: '#0782fa' }}>About Us</h2>
              <div style={{ textAlign: 'justify', margin: '0 12px' }}>
                <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: '1.1em' }}>
                 At AutoDealsTXFL, we specialize in connecting car buyers with trusted dealers across Texas and Florida. Our mission is to make the car-buying process simple, stress-free, and tailored to your needs. Whether you're buying with cash or financing, we’re here to help you find the perfect vehicle through our extensive network of reliable dealers.
                </p>
                <h5 className="fw-semibold mt-4" style={{ color: '#0782fa', marginBottom: '0.7em' }}>Why Choose Us?</h5>
                <ul style={{ fontSize: '1.08rem', color: '#333', paddingLeft: '1.2em', marginBottom: '1.1em' }}>
                  <li>Trusted Dealer Network</li>
                  <li>We collaborate with a network of reputable dealers to give you access to quality vehicles and flexible financing options.</li>
                  <li>In-house financing available in Texas only for customers with no or low credit</li>
                  <li>Bank financing available with competitive rates</li>
                  <li>Vehicles that match your preferences and budget</li>
                  <li>We simplify the process by connecting you with the best dealer for your specific needs</li>
                  <li>Extensive vehicle inventory to meet a wide range of preferences and requirements</li>
                  <li>Whether you need financing or prefer a cash deal, we guide you every step of the way</li>
                  <li>Flexible options: Get pre-approved or complete everything at the dealership</li>
                  <li>Nationwide shipping available so you can get your vehicle wherever you are</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </div>
  );
}

// Scroll to top on route change (Inventory)
export function ScrollToTopOnInventory() {
  useEffect(() => {
    if (window.location.pathname === '/inventory') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [window.location.pathname]);
  return null;
}
