import React from 'react';

const hiddenGems = [
  {
    title: 'Sunset at Amboseli',
    image: './Image/sunset-amboseli.jpg', // ✅ path from public/
    description: 'A magical sunset view just outside Nairobi.',
  },
  {
    title: 'Riverbend Retreat',
    image: './Image/riverbend-retreat.jpg', // ✅ path from public/
    description: 'Serene riverside views in the heart of Kiambu.',
  },
  {
    title: 'Historic Fort Hill',
    image: './Image/historic-fort-hill.jpg', // ✅ path from public/
    description: 'A hidden historical site near Limuru with panoramic views.',
  },
];

const HiddenGemsPage = () => {
  return (
    <section className="p-8 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Hidden Gems</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hiddenGems.map((gem, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
          >
            <img
              src={gem.image}
              alt={gem.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{gem.title}</h3>
              <p className="mt-2 text-gray-700">{gem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiddenGemsPage;
