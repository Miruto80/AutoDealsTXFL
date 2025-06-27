import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './css/navbar.css'
import { useSearch } from '../SearchContext';

export default function Navbar() {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/inventory');
  };

  return (
     <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">        
              <img src="/imagenes/Comunes/Logo.webp" width="120" height="70" className="d-inline-block align-text-top" alt="Logo" />
            </Link>
            <h1 className="navbar-brand fs-6 d-none d-sm-inline d-lg-inline fs-lg-2 text-black">
              <b>Used Cars for Sale - Drive today!</b>
            </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars text-black"></i>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
             <ul className="navbar-nav mb-2 mb-lg-0">
             <li>
             <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
            <Link className="nav-link" to="/pre-approval">Pre-approval</Link>
            </li>
            <li>
            <Link className="nav-link" to="/trade-in">Trade in</Link>
            </li>
          <li>
          <Link className="nav-link" to="/contact-us">Contact Us</Link>
         </li>
          <li> 
          <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>         
         </li>
        <li>
        <Link className="nav-link" id="Link-I" to="/inventory">View inventory</Link>
       </li>
      </ul>

              <form className="d-flex ms-3" role="search" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="search cars..."
                  aria-label="search"
                  name="search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
  )
}
