import React from 'react'
import './css/topbar.css';
function Topbar() {
  return (
   <div class="top-bar" id="top-bar">
        <div class="top-bar-content">
            <span class="contact-info"><i class="fa-solid fa-phone"> Call us:</i><a href="tel:469-275-6620"> 469-275-6620</a></span>
            <div class="social-links">
                <a href="https://www.facebook.com/share/1EnomxWucL/?mibextid=wwXIfr" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/autodealstxfl?igsh=MWZ6c3IyOW5zODBkdA%3D%3D&utm_source=qr" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@autodealstxfl?_t=ZT-8xJJmWIPzMN&_r=1" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Topbar