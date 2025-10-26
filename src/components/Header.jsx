import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-logo text-primary">🐾 Vet Hospital</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-secondary">
            <li>
              <Link
                to="/"
                className="text-secondary-dark hover:text-primary font-semibold transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-secondary-dark hover:text-primary font-semibold transition"
              >
                Services
              </Link>
            </li>
            {/* About Us Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="text-secondary-dark hover:text-primary font-semibold transition">
                About Us
              </button>

              {/* Dropdown Menu */}
              {isAboutOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white shadow-lg rounded-lg py-2">
                    <Link
                      to="/about/hospital"
                      className="block px-4 py-2 text-secondary-dark hover:bg-gray-100 hover:text-primary transition"
                    >
                      Our Hospital
                    </Link>
                    <Link
                      to="/about/team"
                      className="block px-4 py-2 text-secondary-dark hover:bg-gray-100 hover:text-primary transition"
                    >
                      Our Team
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/emergency"
                className="text-danger hover:text-danger font-bold transition"
              >
                Emergency
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-secondary-dark hover:text-primary font-semibold transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Book Appointment Button */}
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-secondary font-semibold hover:bg-primary-dark transition">
          Book Appointment
        </button>
      </div>
    </header>
  );
}

export default Header;
