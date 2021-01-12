import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <h1>Stock Up</h1>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search Stock" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>    )
}

export default Navbar;