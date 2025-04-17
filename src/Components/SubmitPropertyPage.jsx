import React, { useState } from 'react';

const SubmitPropertyPage = () => {
  const [formData, setFormData] = useState({
    propertyName: '',
    description: '',
    price: '',
    location: '',
    contactDetails: '',
    propertyType: 'for-sale',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend or API)
    console.log('Property Submitted', formData);
  };

  return (
    <main
      className="p-8 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/images/submit-property-background.jpg')", // Ensure you have this image in the public folder
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-white mb-8">Submit Your Property</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <label className="block text-lg font-medium mb-2">Property Name</label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block text-lg font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block text-lg font-medium mb-2">Price (optional)</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block text-lg font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block text-lg font-medium mb-2">Contact Details</label>
          <input
            type="text"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block text-lg font-medium mb-2">Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          >
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit Property
          </button>
        </form>
      </div>
    </main>
  );
};

export default SubmitPropertyPage;
