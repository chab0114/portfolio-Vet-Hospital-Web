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

      {/* Call to Action Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-primary font-bold mb-4">
            Ready to Schedule an Appointment?
          </h2>
          <p className="text-lg font-secondary mb-6">
            Book your visit today and give your pet the care they deserve.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-secondary font-semibold hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-primary font-bold text-center mb-12">
            Why Choose Our Clinic?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="text-3xl">👨‍⚕️</div>
              <div>
                <h3 className="text-xl font-primary font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600 font-secondary">
                  Our veterinarians have decades of combined experience caring for pets.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="text-xl font-primary font-semibold mb-2">Modern Facilities</h3>
                <p className="text-gray-600 font-secondary">
                  State-of-the-art equipment and comfortable environment for your pet.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="text-3xl">❤️</div>
              <div>
                <h3 className="text-xl font-primary font-semibold mb-2">Compassionate Care</h3>
                <p className="text-gray-600 font-secondary">
                  We treat every pet as if they were our own, with love and respect.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <h3 className="text-xl font-primary font-semibold mb-2">Always Available</h3>
                <p className="text-gray-600 font-secondary">
                  24/7 emergency services to ensure your pet gets help when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;