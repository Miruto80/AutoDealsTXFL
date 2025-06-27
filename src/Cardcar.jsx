import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function CarCard({ car, index, openModal, setInfoCar, setShowInfoModal }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: 'easeOut'
      }
    })
  };

  return (
    <motion.div
      ref={ref}
      className="col-12"
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={index}
    >
      <div className="card p-4 shadow-lg" style={{ marginRight: '1.5rem', borderRadius: '18px', fontSize: '1.2rem' }}>
        <div className="d-flex flex-column flex-md-row align-items-stretch w-100" style={{ gap: '15px' }}>
          <div style={{ flex: '3', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0 }}>
            <img
              src={car.images[0]}
              style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '340px', objectFit: 'cover', borderRadius: '12px' }}
              className="car-img-hover"
              alt={`${car.brand} ${car.title}`}
              onError={e => e.target.style.display = 'none'}
              onClick={() => openModal(car)}
              loading="lazy"
            />
          </div>
          <div className="car-info-box ms-4 d-flex flex-column justify-content-center" style={{ flex: '2', background: 'rgba(255,255,255,0.97)', borderRadius: '12px', padding: '24px' }}>
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <h2 className="text-center text-md-start mb-0" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{car.title}</h2>
              <div className="fw-bold text-success" style={{ fontSize: '1.5rem' }}>{car.price || ""}</div>
            </div>
            <hr className="my-2" />
            <div className="d-flex flex-row gap-5 align-items-center w-100">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-row flex-wrap gap-2 align-items-center">
                  <span className="badge bg-primary">{car.type}</span>
                  <span className="badge bg-secondary">{car.year}</span>
                  <span className="badge bg-success text-white">Down: {car.downPayment || 'N/A'}</span>
                  <span className="badge bg-info text-white">Miles: {car.miles}</span>
                </div>
                <div className="car-location text-secondary" style={{ fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-location-dot me-2" style={{ color: '#0782fa' }}></i>
                  {car.location || 'Location not available'}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-4">
              <button
                className="btn btn-success btn-lg px-5 py-2 fw-bold"
                style={{ fontSize: '1.1rem', borderRadius: '2rem', height: '60px' }}
                onClick={() => { setInfoCar(car); setShowInfoModal(true); }}
              >
                Request information
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}