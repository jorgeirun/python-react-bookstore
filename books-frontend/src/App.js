import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
// import BooksPage from './BooksPage';

function App() {

  return(
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          {/* <Route exact path="/books" element={<BooksPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
