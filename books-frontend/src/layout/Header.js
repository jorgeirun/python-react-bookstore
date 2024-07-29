import React from 'react';
import '../css/Layout.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="layout-header">
            <h1>
                <Link to="/"> My App </Link>
            </h1>
            <Link to="/contact"> Contact </Link>
            <Link to="/about"> About </Link>
            <Link to="/books"> Books </Link>
            {/* Add any other header content here */}
        </header>
    );
};

export default Header;