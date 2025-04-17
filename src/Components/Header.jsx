import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/gallery" className="text-white">Gallery</Link></li>
          <li><Link to="/submit-property" className="text-white">Post Property</Link></li>
          <li><Link to="/hidden-gems" className="text-white">Hidden Gems</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
