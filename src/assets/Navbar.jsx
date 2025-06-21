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
              <img src="/imagenes/Comunes/Logo.webp" width="150" height="80" className="d-inline-block align-text-top" alt="Logo" />
            </Link>
            <h1 className="navbar-brand fs-4 d-none d-sm-inline d-lg-inline fs-lg-2 text-black">
              <b>Used Cars for Sale - Drive today!</b>
            </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars text-black"></i>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li>
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="Link-I" to="/inventory">View inventory</Link>
                </li>
              </ul>
              <form className="d-flex ms-3" role="search" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar autos..."
                  aria-label="Buscar"
                  name="search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-dark" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
  )
}
