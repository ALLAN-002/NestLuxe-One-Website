import { useState } from 'react'
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import GalleryPage from "./Components/Gallery";
import SubmitPropertyPage from "./Components/SubmitPropertyPage";
import HiddenGemsPage from "./Components/HiddenGemsPage";
import ContactPage from "./Components/ContactPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/submit-property" element={<SubmitPropertyPage />} />
          <Route path="/hidden-gems" element={<HiddenGemsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;


