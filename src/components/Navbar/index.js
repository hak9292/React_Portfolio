import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;