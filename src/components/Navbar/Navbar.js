import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://files.cults3d.com/uploaders/16571222/illustration-file/cd3ec0f0-2cbf-4d9e-a049-1dc66089c2fa/99396871_134916994851835_511493947407728640_n.jpg" alt="YourLogo" height="60" />
                </a>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} justify-content-center`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link btn btn-primary" href="#" style={{ fontSize: '1.2rem' }}>Collections</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-primary" href="#" style={{ fontSize: '1.2rem' }}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-primary" href="#" style={{ fontSize: '1.2rem' }}>Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
