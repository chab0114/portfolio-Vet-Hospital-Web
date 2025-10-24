function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            🐾 Vet Hospital
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-red-600 hover:text-red-700 font-semibold transition">
                Emergency
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Book Appointment Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>
    </header>
  );
}

export default Header;