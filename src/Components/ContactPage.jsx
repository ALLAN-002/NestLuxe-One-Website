import React from 'react';

const ContactPage = () => {
  return (
    <section
      className="p-8 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(37, 99, 235, 0.8), rgba(94, 233, 234, 0.8), rgba(34, 197, 94, 0.8))", // Gradient background
      }}
    >
      <h2 className="text-4xl font-bold text-center text-white mb-10">Contact Us</h2>
      <div className="max-w-3xl mx-auto">
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your Message"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
