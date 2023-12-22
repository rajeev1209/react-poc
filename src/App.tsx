import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
<<<<<<< Updated upstream
=======
import { SearchBookPage } from './layouts/SearchBookPage/SearchBookPage';
>>>>>>> Stashed changes

export const App = () => {
  return (
    <div>
      <Navbar />
<<<<<<< Updated upstream
      <HomePage />
=======
      {/* <HomePage /> */}
      <SearchBookPage />
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}
