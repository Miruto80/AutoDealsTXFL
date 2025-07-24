import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/navbar.css';
import { useSearch } from '../SearchContext';

export default function Navbar() {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/inventory');
  };

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="/imagenes/Comunes/Logo.webp"
                width="120"
                height="70"
                className="d-inline-block align-text-top"
                alt="Logo"
              />
            </Link>
            <h1 className="navbar-brand fs-6 d-none d-sm-inline d-lg-inline text-black">
              <b>Used Cars for Sale - Drive today!</b>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars text-black"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/pre-approval">Pre-approval</Link></li>
                <li><Link className="nav-link" to="/trade-in">Trade in</Link></li>
                <li><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
                <li><Link className="nav-link" to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link className="nav-link" id="Link-I" to="/inventory">View inventory</Link></li>
              </ul>

              {/* Ícono de lupa */}
              <button
                className="btn btn-link search-icon"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                aria-label="Open Search"
              >
                <i className="fa-solid fa-magnifying-glass fs-5 text-dark"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal de búsqueda */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="searchModalLabel">Search Cars</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search cars..."
                  aria-label="search"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
