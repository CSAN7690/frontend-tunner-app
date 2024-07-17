import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>Tuner App</h1>
            <Link to="/songs">Songs</Link>
        </nav>
    );
};

export default NavBar;
