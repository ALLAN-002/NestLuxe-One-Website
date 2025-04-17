import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Nairobi Expressway Background */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/public/images/nairobi-expressway.jpg')", // Path including 'public'
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Dream Home in Nairobi & Kiambu
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover rentals, properties for sale, and hidden gems — all in one place.
            </p>
            <Link
              to="/gallery"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full text-lg transition"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <section className="py-16 px-4 sm:px-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Featured Properties
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Property 1 */}
          <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="/public/images/apartment1.jpeg" // Corrected path including 'public'
              alt="2BR in Westlands"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">2BR in Westlands</h3>
              <p className="text-gray-600">Nairobi · KES 55,000/month</p>
            </div>
          </div>

          {/* Property 2 */}
          <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="/public/images/apartment2.jpg" // Corrected path including 'public'
              alt="Studio in Ruiru"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">Studio in Ruiru</h3>
              <p className="text-gray-600">Kiambu · KES 22,000/month</p>
            </div>
          </div>

          {/* Property 3 */}
          <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="/public/images/apartment3.jpg" // Corrected path including 'public'
              alt="4BR Maisonette in Karen"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">4BR Maisonette in Karen</h3>
              <p className="text-gray-600">Nairobi · KES 95,000/month</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/gallery"
            className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg transition"
          >
            View All Listings
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
