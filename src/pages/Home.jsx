function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-primary font-bold mb-6">
            Compassionate Care for Your Beloved Pets
          </h1>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Providing exceptional veterinary services with love and expertise.
            Your pet's health and happiness are our top priorities.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition">
              Book Appointment
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-secondary font-semibold hover:bg-primary hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-primary font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-primary font-semibold mb-3">Wellness Exams</h3>
              <p className="text-gray-600 font-secondary">
                Regular check-ups to keep your pet healthy and prevent future health issues.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">💉</div>
              <h3 className="text-2xl font-primary font-semibold mb-3">Vaccinations</h3>
              <p className="text-gray-600 font-secondary">
                Comprehensive vaccination programs to protect your pet from diseases.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-primary font-semibold mb-3">Diagnostics</h3>
              <p className="text-gray-600 font-secondary">
                Advanced diagnostic tools including lab work, X-rays, and ultrasound.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;