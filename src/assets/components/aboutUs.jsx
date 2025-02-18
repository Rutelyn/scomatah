const AboutUs = () => {
  return (
    <div className="h-full px-6 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold font-serif text-center text-teal-700 mb-6">
          About Us
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-serif text-teal-600 mb-2">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            We are passionate about promoting health and sustainability through
            our plantain-based products. Our journey started with a simple idea:
            to create nutritious and eco-friendly food options while supporting
            local farmers and communities.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-serif text-teal-600 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Prioritizing health and wellness</li>
            <li>Encouraging sustainable farming and production</li>
            <li>Empowering local communities and farmers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-teal-600 mb-2">Our Process</h2>
          <p className="text-gray-700 leading-relaxed">
            We take great care in selecting the finest plantains, which are
            sustainably harvested from trusted local farms. Our production
            process ensures minimal waste, high nutritional value, and eco-friendly
            packaging to support a greener future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
