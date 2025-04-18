import React from "react";
import apartment1 from "../../images/apartment1.jpeg";
import apartment2 from "../../images/apartment2.jpg";
import apartment3 from "../../images/apartment3.jpg";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-12">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
        All Property Listings
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={apartment1}
            alt="2BR in Westlands"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">2BR in Westlands</h3>
            <p className="text-gray-600">Nairobi · KES 55,000/month</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={apartment2}
            alt="Studio in Ruiru"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">Studio in Ruiru</h3>
            <p className="text-gray-600">Kiambu · KES 22,000/month</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={apartment3}
            alt="4BR Maisonette in Karen"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">4BR Maisonette in Karen</h3>
            <p className="text-gray-600">Nairobi · KES 95,000/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
