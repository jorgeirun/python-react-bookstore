import React from 'react';
import '../css/Layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="layout-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
