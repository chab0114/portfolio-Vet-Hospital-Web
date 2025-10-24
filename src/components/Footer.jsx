function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">📞 Phone: (555) 123-4567</p>
            <p className="text-gray-300">📧 Email: info@vethospital.com</p>
            <p className="text-gray-300 mt-2">📍 123 Pet Street</p>
            <p className="text-gray-300">City, Province, K1L 2M3</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-300">Monday - Thursday: 8:00am - 6:00pm</p>
            <p className="text-gray-300">Friday: 8:00am - 5:00pm</p>
            <p className="text-gray-300">Saturday - Sunday: Closed</p>
            <p className="text-red-400 font-semibold mt-4">
              ⚠️ After Hours Emergencies
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Please contact one of the emergency hospitals
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Request An Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  New Client Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  Pet Health Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Vet Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
