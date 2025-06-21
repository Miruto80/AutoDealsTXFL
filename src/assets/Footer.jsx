import React, { useState } from 'react'
import './css/footer.css'

function Footer() {
  const [showLegal, setShowLegal] = useState(false);
  return (
    <footer className="footer-custom">
        <h4 className="footer-title mb-3">Follow us on social media</h4>
        <div className="redes-sociales mb-3" id="contact">
            <a target="_blank" href="https://www.instagram.com/autodealstxfl?igsh=MWZ6c3IyOW5zODBkdA%3D%3D&utm_source=qr" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/share/1EnomxWucL/?mibextid=wwXIfr" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a target="_blank" href="https://www.tiktok.com/@autodealstxfl?_t=ZT-8xJJmWIPzMN&_r=1" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
            </a>
            <span className="footer-contact ms-3"><i className="fa-solid fa-phone me-1"></i><a href="tel:469-275-6620"> 469-275-6620 </a></span>
            <span className="footer-contact ms-3"><i className="fa-solid fa-envelope me-1"></i>autodealstxfl@gmail.com</span>
        </div>
        <div className="legal mt-4">
            <button id="legal-button" className="btn btn-outline-light px-4 py-2 mb-2" onClick={() => setShowLegal(v => !v)}>
                Legal <i className={`fa-solid fa-chevron-${showLegal ? 'up' : 'down'} ms-2`}></i>
            </button>
            <div id="legal-content" className={showLegal ? '' : 'hidden'}>
                <p className="mb-1">&copy; AutoDealsTXFL 2025</p>
                <p className="mb-1">All rights reserved. The images of the cars are used with permission.</p>
                <p className="mb-0">AutoDealsTXFL.com operates exclusively as a car locator and intermediary between buyers and dealers in Texas and Florida. We do not sell vehicles directly. All pricing, financing terms, and warranties are determined and managed by the individual dealer.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer