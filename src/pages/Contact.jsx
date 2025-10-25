function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-primary font-bold mb-4">Contact Us</h1>
          <p className="text-lg font-secondary">
            We're here to help! Book an appointment or get in touch.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Information */}
            <div>
              <h2 className="text-3xl font-primary font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-primary font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 font-secondary">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-primary font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 font-secondary">info@vethospital.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-primary font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600 font-secondary">
                      123 Pet Street<br />
                      City, Province, K1L 2M3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <h3 className="font-primary font-semibold text-lg mb-1">Hours</h3>
                    <p className="text-gray-600 font-secondary">
                      Monday - Thursday: 8:00am - 6:00pm<br />
                      Friday: 8:00am - 5:00pm<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="mt-8 p-4 bg-red-50 border-l-4 border-danger rounded">
                <p className="text-sm text-gray-700 font-secondary">
                  <strong>Emergency Notice:</strong> Please call the clinic during regular hours for all emergencies. 
                  Outside of our regular hours, please contact one of the emergency hospitals.
                </p>
              </div>
            </div>

            {/* Right Side - Appointment Request Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-primary font-bold mb-4">Request an Appointment</h2>
              <p className="text-gray-600 font-secondary mb-6">
                We are happy to book an appointment for you. This is not an automatic process. 
                Once we receive your request, we will contact you to confirm a date and time.
              </p>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-secondary font-semibold mb-2">
                    Name *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First"
                      className="border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last"
                      className="border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-secondary font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-secondary font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Pet Name */}
                <div>
                  <label className="block text-gray-700 font-secondary font-semibold mb-2">
                    Pet Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-secondary font-semibold mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-secondary font-semibold mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/* Reason for Appointment */}
                <div>
                  <label className="block text-gray-700 font-secondary font-semibold mb-2">
                    Reason for Appointment *
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 font-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition"
                >
                  Submit Request
                </button>

                <p className="text-sm text-gray-600 font-secondary text-center">
                  If your appointment has not been confirmed within 24 hours, please contact us by phone.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;